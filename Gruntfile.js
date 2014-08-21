module.exports = function(grunt) {
    var BROWSER, alias, dev, ifaces, ip, os;
    os = require("os");
    ip = "localhost";
    ifaces = os.networkInterfaces();
    for (dev in ifaces) {
        alias = 0;
        ifaces[dev].forEach(function(details) {
            if (details.family === "IPv4" && details.internal === false) {
                console.log(":", dev, (alias ? ":" + alias : ""), details.address);
                ip = details.address;
                ++alias;
            }
        });
    }
    require('matchdep').filterDev('grunt-*').forEach(function(name) {
        return grunt.loadNpmTasks(name);
    });
    BROWSER = 'Google Chrome Canary';
    if (process.platform === 'win32') {
        BROWSER = 'chrome';
    }
    grunt.initConfig({
        watch: {
            coffee: {
                files: ["src/coffee/*"],
                tasks: ["coffee", "concat", "uglify"],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: ["src/sass/*"],
                tasks: ["compass"],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ["src/jade/*"],
                tasks: ["jade"],
                options: {
                    livereload: true
                }
            },
            copy: {
                files: ["src/fla/*.js"],
                tasks: ["pngmin", "copy:cjs", "concat", "uglify"],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            lib: {
                files: [
                    {
                        "dist/js/jquery.min.js": "lib/jquery.min.js"
                    }
                ]
            },
            cjs: {
                files: [
                    {
                        expand: true,
                        src: ["**/*.{png,jpg,jpeg}"],
                        cwd: "src/fla/images/canvas",
                        dest: "dist/images/canvas"
                    }, {
                        expand: true,
                        src: ["**/*.js"],
                        cwd: "src/fla",
                        dest: "js"
                    }
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: "dist"
                }
            }
        },
        coffee: {
            develop: {
                options: {
                    bare: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "src/coffee/",
                        src: ["**/*.coffee"],
                        dest: "js",
                        ext: ".js"
                    }
                ]
            }
        },
        compass: {
            develop: {
                options: {
                    sassDir: "src/sass/",
                    cssDir: "dist/css/"
                }
            }
        },
        jade: {
            develop: {
                files: [
                    {
                        expand: true,
                        cwd: "src/jade/",
                        src: ["*.jade"],
                        dest: "dist/",
                        ext: ".html"
                    }
                ],
                options: {
                    pretty: true
                }
            }
        },
        concat: {
            develop: {
                src: ["js/asset.js", "js/main.js"],
                dest: "js/all.js"
            }
        },
        pngmin: {
            develop: {
                options: {
                    force: true,
                    ext: ".png"
                },
                files: [
                    {
                        expand: true,
                        src: "src/fla/images/canvas/*.png"
                    }
                ]
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            develop: {
                files: {
                    "dist/js/all.min.js": ["js/all.js"]
                }
            }
        },
        clean: {
            cjs_image: ["src/fla/images/*"],
            dist: ["dist"]
        },
        open: {
            develop: {
                path: "" + ip + ":9000",
                app: BROWSER
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ssl102.heteml.jp',
                    authKey: 'key1'
                },
                src: 'dist',
                dest: 'web/393/grunt-sample/' + grunt.template.today('yyyymmdd_HHMMss')
            }
        }
    });
    grunt.registerTask("default", ["start"]);
    grunt.registerTask("start", ["clean:dist", "coffee", "compass", "jade", "copy", "concat", "uglify", "connect", "open", "watch"]);
};
