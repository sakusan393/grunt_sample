#grunt_sample

---

##事前準備(windows向け)

####nodejsをインストール
* [http://nodejs.org/](http://nodejs.org/)  
INSTALL クリックでインストーラーをダウンロードして実行

####Rubyをインストール(compass用)
* [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)  
※32bit版のインストーラーをダウンロードして実行

####compassをインストール
* コマンドプロンプトにて、 `gem install compass`  
※コマンドプロンプトのカレントディレクトリはどこでもよい  
※Rubyが正しくインストールされていればgemコマンド使えるはず


----

##node_modules(各種プラグイン)を一括でインストール
* コマンドプロンプトにて、`npm install`  
※コマンドプロンプトのカレントディレクトリはプロジェクトのルート階層とする

----

##実行コマンド

* `grunt start`  
以下のタスクが実行される  
"clean:dist"/
"coffee"/
"compass"/
"jade"/
"copy"/
"concat"/
"uglify"/
"connect"/
"open"/
"watch"


---

#主なプラグイン

##grunt-contrib-coffee
* coffeescript→jsのコンパイル

##grunt-contrib-compass
* commpass(sass)→cssのコンパイル

##grunt-contrib-jade
* jade→htmlのコンパイル

##grunt-contrib-concat
* jsの結合

##grunt-contrib-uglify
* jsの圧縮

##grunt-contrib-copy
* 任意フォルダ/ファイルのコピー

##grunt-contrib-clean
* 任意フォルダ/ファイルの削除

##grunt-contrib-connect
* ローカルサーバーの起動

##grunt-contrib-watch
* 任意フォルダ/ファイルの監視

##grunt-pngmin
* pngファイルの圧縮

##grunt-open
* ブラウザ(chrome canary)の起動

##grunt-ftp-deploy
* ftpサーバーへのアップロード
* .ftppass_に、任意のusernameとpasswordを設定
* .ftppass_を.ftppassにリネーム
* dest: 'myserver_path/' + grunt.template.today('yyyymmdd_HHMMss')：アップロード日時フォルダを指定

