module.exports = (grunt) ->

  #ipアドレス取得
  os = require("os")
  ip = "localhost"
  ifaces = os.networkInterfaces()
  for dev of ifaces
    alias = 0
    ifaces[dev].forEach (details) ->
      if details.family is "IPv4" and details.internal == false
        console.log ":", dev , ((if alias then ":" + alias else "")), details.address
        ip = details.address
        ++alias
      return

  #package.jsonに登録されてるタスクをまとめて定義
  require('matchdep').filterDev('grunt-*').forEach (name)->
    grunt.loadNpmTasks(name);

  #grunt-open時使用するGoogleChromeCanary名を設定
  #winとmacで名前が異なる
  BROWSER = 'Google Chrome Canary'
  if process.platform == 'win32'
    #winでは、"chrome"でGoogleChromeCanaryが起動
    BROWSER = 'chrome'

  grunt.initConfig
    watch:
      coffee:
        files: ["src/coffee/*"]
        tasks: [
          "coffee","concat","uglify"
        ]
        options:
          livereload: true
      compass:
        files: ["src/sass/*"]
        tasks: [
          "compass"
        ]
        options:
          livereload: true
      jade:
        files: ["src/jade/*"]
        tasks: [
          "jade"
        ]
        options:
          livereload: true
      copy:
        files: ["src/fla/*.js"]
        tasks:["pngmin","copy:cjs","concat","uglify"]
        options:
          livereload: true

    copy:
      lib:
        files: [
          "dist/js/jquery.min.js":"lib/jquery.min.js"
        ]
      cjs:
        files:[
          {expand:true, src:["**/*.{png,jpg,jpeg}"], cwd:"src/fla/images/canvas", dest:"dist/images/canvas"}
          {expand:true, src:["**/*.js"], cwd:"src/fla", dest:"js"}
        ]

    connect:
      server:
        options:
          port: 9000
          base: "dist"

    coffee:
      develop:
        options:
          bare: true

        files: [
          expand: true
          cwd: "src/coffee/"
          src: ["**/*.coffee"]
          dest: "js"
          ext: ".js"
        ]
    compass:
      develop:
        options:
          sassDir:"src/sass/"
          cssDir:"dist/css/"

    jade:
      develop:
        files:[
          expand:true
          cwd:"src/jade/"
          src:["*.jade"]
          dest:"dist/"
          ext:".html"
        ]
        options:
          pretty:true
    concat:
      develop:
        src:["js/asset.js","js/main.js"]
        dest:"js/all.js"

    pngmin:
      develop:
        options:
          force:true
          ext:".png"
        files:[
          expand:true
          src:"src/fla/images/canvas/*.png"
          ]

    uglify:
      options:
        mangle: true
        compress: true
      develop:
        files:
          "dist/js/all.min.js": ["js/all.js"]

    clean:
      cjs_image:
        ["src/fla/images/*"]
      dist:
        ["dist"]
    open:
      develop:
        path: "#{ip}:9000"
        app: BROWSER

    'ftp-deploy':
      build:
        auth:
          host: 'ssl102.heteml.jp'
          authKey: 'key1'
        src: 'dist'
        dest: 'web/393/grunt-sample/' + grunt.template.today('yyyymmdd_HHMMss')

  grunt.registerTask "default", ["start"]

  grunt.registerTask "start", [
    "clean:dist"
    "coffee"
    "compass"
    "jade"
    "copy"
    "concat"
    "uglify"
    "connect"
    "open"
    "watch"
  ]
  return