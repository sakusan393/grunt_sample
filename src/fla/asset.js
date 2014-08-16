(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/canvas/bgimage2.png", id:"bgimage2"},
		{src:"images/canvas/image0.png", id:"image0"},
		{src:"images/canvas/image1.png", id:"image1"},
		{src:"images/canvas/image2.png", id:"image2"},
		{src:"images/canvas/unitako.png", id:"unitako"}
	]
};



// symbols:



(lib.bgimage2 = function() {
	this.initialize(img.bgimage2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,308);


(lib.image0 = function() {
	this.initialize(img.image0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,54);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,54);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,54);


(lib.unitako = function() {
	this.initialize(img.unitako);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,224);


(lib.OsyareInner1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139,54);


(lib.OsyareInner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image0();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,54);


(lib.Osyare2Inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AjIDJQhUhTAAh2QAAh1BUhTQBThUB1AAQB2AABTBUQBUBTAAB1QAAB2hUBTQhTBUh2AAQh1AAhThUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.BackgroundImage = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.bgimage2();
	this.instance.setTransform(202.6,37.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.Osyare2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Osyare2Inner();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.19,scaleY:2.19},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-28.5,57,57);


(lib.Osyare1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.OsyareInner1();
	this.instance.setTransform(69.5,27,1,1,0,0,0,69.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1049.7},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,54);


(lib.Osyare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.instance = new lib.OsyareInner();
	this.instance.setTransform(84.5,27,1,1,0,0,0,84.5,27);

	this.instance_1 = new lib.Osyare2();
	this.instance_1.setTransform(488.1,368.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-915.5},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,54);


// stage content:



(lib.asset = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.Osyare();
	this.instance.setTransform(896.2,27,1,1,0,0,0,84.5,27);

	this.instance_1 = new lib.Osyare1();
	this.instance_1.setTransform(-81,237.1,1,1,0,0,0,69.5,27);

	// bg
	this.instance_2 = new lib.BackgroundImage();
	this.instance_2.setTransform(244,185.5,1,1,0,0,0,244,185.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(249.5,200,1131.2,345.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;