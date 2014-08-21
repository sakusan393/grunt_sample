#タスクランナーとはなんぞや

ざっくり  
いろんな処理を(自動で)してくれるツール

---

##とりあえずどんなものか:casestudyなデモ

###シチュエーション  
オシャレでやばいアニメーションするWebサイト作ってね!  
もちろんスマホでもうごいてね!

オシャレでやばいアニメーション!  
FlashProfessionalのHTML5 Canvas書き出しを使おう！

FlashProfessionalで作ったアニメーションから  
jsとhtmlを生成してくれる

---

##デモの構成
canvasアニメーションを使ったwebサイト
canvasuアニメはcreatejsで書き出し。
createjsで自動生成されるjsで個々のアニメパーツをアセットとして使用。
各パーツは別途jsで制御したい。

###デモソース一式
* [https://github.com/sakusan393/grunt_sample](github)
* [](zip)

---

##タスクランナーが行ったこと
###起動時
* 出力フォルダの削除
* coffeescriptのコンパイル
* compass(sass)のコンパイル
* jadeのコンパイル
* Flashが生成したファイルから必要なものをコピー
* jsファイルの結合
* ローカルでWEBサーバー起動
* ブラウザの起動(Google Chrome Canary)
* ファイルの監視

###ファイル監視
* jade/sass/coffee更新毎
* 各ビルド→ブラウザリロード

###Flashでパブリッシュ毎
* 生成されたpng画像の圧縮
* flaから生成したjs/imageファイルをコピー
* jsファイルの結合  
→ブラウザリロード

###そのた
* アップロード日時のフォルダを作ってアップロード

---

##タスクランナーについて

有名どころはこの3つでしょうか。  
（有名＝使ったことがある）

* grunt
* gulp
* middleman(上の2つとはちょっと意味合いが違うかも）


###grunt

* 恐らくこの中で一番メジャー  
* ぐぐるとブログ記事など多数あり

###gulp
* 流行ってるのでより高いオシャレ度
* gruntほどブログ記事はなさげ

###middleman
* 前述のタスクランナーとはちょっと違うかも
* Rubyに慣れてる人にはよさげ
* 細かい設定不要だけどお作法は覚える必要あり

---

##導入手順（ざっくり）

###grunt

* nodejsが必要  
(インストラーでインストール可能）

* npm経由でGRUNTをインストール  
`npm install grunt-cli -g`  
※npmはコマンドプロンプト(いわゆる黒い画面）

* 各種便利機能は個別にプラグインをDL  
例) coffeescriptのプラグイン  
`npm install grunt-contrib-coffee --save-dev`


###DEMOで使用したプラグイン
* grunt-contrib-coffee//coffeeコンパイル
* grunt-contrib-compass//compassコンパイル
* grunt-contrib-jade//jadeコンパイル
* grunt-contrib-uglify//jsの圧縮
* grunt-contrib-concat//jsの結合
* grunt-contrib-copy//ファイルのコピー
* grunt-contrib-clean//ファイルの削除
* grunt-contrib-watch//ファイルの監視
* grunt-contrib-connect//サーバー起動
* grunt-open//ブラウザを開く
* grunt-pngmin//png画像の圧縮
* grunt-ftp-deploy//ftpへのアップロード


###gruntfileの作成(jsでもcoffeeでも可）
DLした各タスクの設定をここに記述  
書き方は、ぐぐると良い記事たくさんありますのでコピペしましょう。  
意味がよくわからなくてもとりあえずお作法通りにかけば動きます。

実行はコマンドプロンプトで  
grunt "登録タスク名" で実行

* 例)  
* `grunt start` //もろもろ起動
* `grunt ftp-deploy` //ftpにアップロード

---

##gulp

grunt同様nodejsなので作法はほとんど一緒

GRUNT同様、nodejsが必要

* npm経由でGRUNTをインストール  
`npm install gulp -g`  

* 各種便利機能は個別にプラグインをDL  
例) coffeescriptのプラグイン  
`npm install gulp-coffee --save-dev`

###gulp.jsの作成(.coffeeには人手間必要)
 
行わせたいタスクをここに記述  
記述はGruntfile.jsよりもシンプル

---

##middleman

Rubyが必要(インストーラーあります )   
ruby devkitも必要  
(winは32bit版必須、らしい）

###gem経由でMIDDLEMANをインストール
`gem install middleman`  
※gemはコマンドプロンプトでの作業

###初期化
`middleman init`

これだけで他にプラグインをいれなくともいろいろできる
* coffee,sass,erbのコンパイル
* 便利機能もひととおり（ヘルパー：絶対パス・相対パス切り替え）
* 開発ブラウザのライブリロード機能
* もろもろ設定ファイル(config.rb)に記述

---

##まとめ

##GRUNT
* メジャー感による困ったときの安心感
* プラグイン多数による安心感
* コピペ万歳

##gulp
* GRUNTより速い
* プラグインも一通り揃ってる
* ただ期待通り動かないものもあったり

##MIDDLEMAN
* 上2つとは違うもの
* Rubyに慣れてる人にはよさげ
* さくっと作るようなものによさげ




