var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["de4a1711-c7ec-4b05-a86e-c9214f4b1178","c476fcc7-44e5-4882-9c30-0cfd4685c39b"],"propsByKey":{"de4a1711-c7ec-4b05-a86e-c9214f4b1178":{"name":"boxcar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png"},"c476fcc7-44e5-4882-9c30-0cfd4685c39b":{"name":"mon_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,20,420,3);
  boundary2 = createSprite(190,360,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("mon_1")
  sam.scale=0.1
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("boxcar_1")
  car1.scale=0.1
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("boxcar_1")
  car2.scale=0.1
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("boxcar_1")
  car3.scale=0.1
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("boxcar_1")
  car4.scale=0.1
 
//add the velocity to make the car move.
car2.velocityY=7
car3.velocityY=
car1.velocityY=-2
car4.velocityY=-2






function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
 
 createEdgeSprites()
 car1.bounceOff(boundary1)
 car1.bounceOff(boundary2)
 
  car2.bounceOff(boundary1)
 car2.bounceOff(boundary2)
  car3.bounceOff(boundary1)
 car3.bounceOff(boundary2)
   car4.bounceOff(boundary1)
 car4.bounceOff(boundary2)
 
if (keyDown("left")) 
{
  sam.x=sam.x-2
}   
 if (keyDown("RIGHT")) 
   {
     sam.x=sam.x+4
   }
 
 if (sam.isTouching(car1)) 
  {
    sam.x=20
    sam.y=190
    life=life+1
  } 
 
 if (sam.isTouching(car2)) 
  {
    sam.x=20
    sam.y=190
    life=life+1
  } 
 
  
 if (sam.isTouching(car3)) 
  {
    sam.x=20
    sam.y=190
    life=life+1
  } 
 
 
 if (sam.isTouching(car4)) 
  {
    sam.x=20
    sam.y=190
    life=life+1
    
  } 
 
 
 
 
 
 
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
