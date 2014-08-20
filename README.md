#grunt_sample
==

##事前準備(windows向け)

####nodejsをインストール
* [http://nodejs.org/](http://nodejs.org/)  
INSTALL クリックでインストーラーをダウンロードして実行

####Rubyをインストール(compass用)
* [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)  
※32bit版のインストーラーをダウンロードして実行

####compassをインストール
* コマンドプロンプトにて、`gem install compass`  
(Rubyがインストールできてればgemコマンド使えるはず)

##grunt-ftp
###ftpサーバーへのアップロード
* .ftppass_に、任意のusernameとpasswordを設定
* .ftppass_を.ftppassにリネーム
* dest: 'myserver_path/' + grunt.template.today('yyyymmdd_HHMMss')：アップロード日時フォルダを指定

