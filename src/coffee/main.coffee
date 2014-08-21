handleFileLoad = (evt) ->
  images[evt.item.id] = evt.result  if evt.item.type is "image"
  return
handleComplete = ->
  canvas = document.getElementById("canvas");
  window.stage = new createjs.Stage(canvas)
  initCJS();

  stage.update()
  createjs.Ticker.setFPS lib.properties.fps
  createjs.Ticker.addEventListener "tick", stage
  return

initCJS = ()->
  container = new createjs.Container();
  stage.addChild container
  for val in [0...10]
    osyare = new lib.Osyare();
    osyare.x = 800
    osyare.y = Math.random() * 300
    container.addChild osyare
    osyare.gotoAndPlay(Math.random()*60)
  for val in [0...5]
    yabai = new lib.Osyare1();
    yabai.x = -100
    yabai.y = Math.random() * 300
    container.addChild yabai
    yabai.gotoAndPlay(Math.random()*60)
#    return


images = window.images||{};

loader = new createjs.LoadQueue(false);
loader.addEventListener("fileload", handleFileLoad);
loader.addEventListener("complete", handleComplete);
loader.loadManifest(lib.properties.manifest);

