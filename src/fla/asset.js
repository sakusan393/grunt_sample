(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/canvas/image0.png", id:"image0"},
		{src:"images/canvas/image1.png", id:"image1"}
	]
};



// symbols:



(lib.image0 = function() {
	this.initialize(img.image0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,54);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,54);


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


(lib.Osyare1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.OsyareInner1();
	this.instance.setTransform(69.5,27,1,1,0,0,0,69.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.55,scaleY:2.55,x:553.4},39).to({scaleX:1,scaleY:1,x:1049.7},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,54);


(lib.Osyare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.instance = new lib.OsyareInner();
	this.instance.setTransform(84.5,27,1,1,0,0,0,84.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.47,scaleY:2.47,x:-387.3},28).to({scaleX:1,scaleY:1,x:-909.7},31).wait(1));

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

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(249.5,200,1131.2,264.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;