// stacking background type-images
// create a random integer value from 0 to 3
// and create the approporaite strings
var random = Math.floor(Math.random() * 4);
var line1 = "line-1-" + random;
var line2 = "line-2-" + random;
var line3 = "line-3-" + random;
var line4 = "line-4-" + random;

var bg1 = new Raster(line1);
var path1 = new Path.Rectangle({
    point: [0, 0],
    size: [view.bounds.width, view.bounds.height/4]
});
bg1.fitBounds(path1.bounds);

var bg2 = new Raster(line2);
var path2 = new Path.Rectangle({
    point: [0, view.bounds.height/4],
    size: [view.bounds.width, view.bounds.height/4]
});
bg2.fitBounds(path2.bounds);

var bg3 = new Raster(line3);
var path3 = new Path.Rectangle({
    point: [0, (view.bounds.height/4) * 2],
    size: [view.bounds.width, view.bounds.height/4]
});
bg3.fitBounds(path3.bounds);

var bg4 = new Raster(line4);
var path4 = new Path.Rectangle({
    point: [0, (view.bounds.height/4) * 3],
    size: [view.bounds.width, view.bounds.height/4]
});
bg4.fitBounds(path4.bounds);

view.onResize = function() {
  path1 = new Path.Rectangle({
      point: [0, 0],
      size: [view.bounds.width, view.bounds.height/4]
  });
  bg1.fitBounds(path1.bounds);
  path2 = new Path.Rectangle({
      point: [0, view.bounds.height/4],
      size: [view.bounds.width, view.bounds.height/4]
  });
  bg2.fitBounds(path2.bounds);
  path3 = new Path.Rectangle({
      point: [0, (view.bounds.height/4) * 2],
      size: [view.bounds.width, view.bounds.height/4]
  });
  bg3.fitBounds(path3.bounds);
  path4 = new Path.Rectangle({
      point: [0, (view.bounds.height/4) * 3],
      size: [view.bounds.width, view.bounds.height/4]
  });
  bg4.fitBounds(path4.bounds);
}

/*
// links for background text images
// on mouse enter...
bg1.onMouseEnter = function() {
  // ...set canvas cursor to pointer
  view.element.style.setProperty('cursor', 'pointer');
}
// on mouse leave...
bg1.onMouseLeave = function() {
  // ...set canvas cursor to default
  view.element.style.setProperty('cursor', null);
}
bg1.onClick = function(event) {
  window.open("https://bendenzer.com");
}
bg2.onMouseEnter = function() {
  // ...set canvas cursor to pointer
  view.element.style.setProperty('cursor', 'pointer');
}
// on mouse leave...
bg2.onMouseLeave = function() {
  // ...set canvas cursor to default
  view.element.style.setProperty('cursor', null);
}
bg2.onClick = function(event) {
  window.open("https://cargocollective.com/lilyoffit");
}
bg3.onMouseEnter = function() {
  // ...set canvas cursor to pointer
  view.element.style.setProperty('cursor', 'pointer');
}
// on mouse leave...
bg3.onMouseLeave = function() {
  // ...set canvas cursor to default
  view.element.style.setProperty('cursor', null);
}
bg3.onClick = function(event) {
  window.open("https://images.app.goo.gl/xwUdw4H57dYov73T9");
}
bg4.onMouseEnter = function() {
  // ...set canvas cursor to pointer
  view.element.style.setProperty('cursor', 'pointer');
}
// on mouse leave...
bg4.onMouseLeave = function() {
  // ...set canvas cursor to default
  view.element.style.setProperty('cursor', null);
}
bg4.onClick = function(event) {
  window.open("https://images.app.goo.gl/gMTpCLH6L32y7KCE6");
}
*/

// new active layer
var secondLayer = new Layer();

// add ben painting + href
var ben = new Raster("ben");
// on mouse enter...
ben.onMouseEnter = function() {
  // ...set canvas cursor to pointer
  view.element.style.setProperty('cursor', 'pointer');
}
// on mouse leave...
ben.onMouseLeave = function() {
  // ...set canvas cursor to default
  view.element.style.setProperty('cursor', null);
}
ben.onClick = function(event) {
  window.open("photos/BenP.jpg", "Ben", "width=450,height=452");
}

// add lily painting + href
var lily = new Raster("lily");
lily.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
lily.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
lily.onClick = function(event) {window.open("photos/LilyP.jpg", "Lily", "width=450,height=326");}

var bird1 = new Raster("bird1");
bird1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird1.onClick = function(event) {window.open("photos/Bird1P.jpg", "Bird1", "width=420,height=340");}

var bird2 = new Raster("bird2");
bird2.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird2.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird2.onClick = function(event) {window.open("photos/Bird2P.jpg", "Bird2", "width=545,height=650");}

var bird3 = new Raster("bird3");
bird3.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird3.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird3.onClick = function(event) {window.open("photos/Bird3P.jpg", "Bird3", "width=400,height=326");}

var bird4 = new Raster("bird4");
bird4.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird4.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird4.onClick = function(event) {window.open("photos/Bird4P.jpg", "Bird4", "width=420,height=340");}

var bird5 = new Raster("bird5");
bird5.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird5.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird5.onClick = function(event) {window.open("photos/Bird5P.jpg", "Bird5", "width=300,height=423");}

var bird6 = new Raster("bird6");
bird6.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird6.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird6.onClick = function(event) {window.open("photos/Bird6P.jpg", "Bird6", "width=300,height=423");}

var bird7 = new Raster("bird7");
bird7.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
bird7.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
bird7.onClick = function(event) {window.open("photos/Bird7P.jpg", "Bird7", "width=404,height=326");}

var buritto1 = new Raster("buritto1");
buritto1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
buritto1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
buritto1.onClick = function(event) {window.open("photos/Buritto1P.jpg", "Buritto1", "width=404,height=326");}

var cab1 = new Raster("cab1");
cab1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
cab1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
cab1.onClick = function(event) {window.open("photos/Cab1P.jpg", "Cab1", "width=300,height=423");}

var cactus1 = new Raster("cactus1");
cactus1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
cactus1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
cactus1.onClick = function(event) {window.open("photos/Cactus1P.jpg", "Cactus1", "width=421,height=443");}

var century1 = new Raster("century1");
century1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
century1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
century1.onClick = function(event) {window.open("https://www.google.com/maps/place/The+Century+Association/@40.7519797,-73.9970784,14.28z/data=!4m5!3m4!1s0x0:0x9f4afc5b9c1cf65a!8m2!3d40.7546062!4d-73.9809957");}

var cookie1 = new Raster("cookie1");
cookie1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
cookie1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
cookie1.onClick = function(event) {window.open("photos/CookieP1.jpg", "Cookie1", "width=300,height=422");}

var corn1 = new Raster("corn1");
corn1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
corn1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
corn1.onClick = function(event) {window.open("photos/Corn1P.jpg", "Corn1", "width=404,height=326");}

var flowers1 = new Raster("flowers1");
flowers1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
flowers1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
flowers1.onClick = function(event) {window.open("photos/Flowers1P.jpg", "Flowers1", "width=404,height=326");}

var flowers2 = new Raster("flowers2");
flowers2.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
flowers2.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
flowers2.onClick = function(event) {window.open("photos/Flowers2P.jpg", "Flowers2", "width=404,height=326");}

var glue1 = new Raster("glue1");
glue1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
glue1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
glue1.onClick = function(event) {window.open("photos/Glue1P.jpg", "Glue1", "width=404,height=326");}

var hat1 = new Raster("hat1");
hat1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
hat1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
hat1.onClick = function(event) {window.open("photos/Hat1P.jpg", "Hat1", "width=421,height=443");}

var hotpot1 = new Raster("hotpot1");
hotpot1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
hotpot1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
hotpot1.onClick = function(event) {window.open("photos/Hotpot1P.jpg", "Hotpot1", "width=404,height=326");}

var napkin1 = new Raster("napkin1");
napkin1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
napkin1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
napkin1.onClick = function(event) {window.open("photos/Napkin1P.jpg", "Napkin1", "width=404,height=326");}

var parm1 = new Raster("parm1");
parm1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
parm1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
parm1.onClick = function(event) {window.open("photos/Parm1P.jpg", "Parm1", "width=404,height=326");}

var puppy1 = new Raster("puppy1");
puppy1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy1.onClick = function(event) {window.open("photos/Puppy1P.jpg", "Puppy1", "width=404,height=326");}

var puppy2 = new Raster("puppy2");
puppy2.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy2.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy2.onClick = function(event) {window.open("photos/Puppy2P.jpg", "Puppy2", "width=404,height=326");}

var puppy3 = new Raster("puppy3");
puppy3.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy3.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy3.onClick = function(event) {window.open("photos/Puppy3P.jpg", "Puppy3", "width=501,height=400");}

var puppy4 = new Raster("puppy4");
puppy4.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy4.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy4.onClick = function(event) {window.open("photos/Puppy4P.jpg", "Puppy4", "width=501,height=398");}

var puppy5 = new Raster("puppy5");
puppy5.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy5.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy5.onClick = function(event) {window.open("photos/Puppy5P.jpg", "Puppy5", "width=501,height=398");}

var puppy6 = new Raster("puppy6");
puppy6.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy6.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy6.onClick = function(event) {window.open("photos/Puppy6P.jpg", "Puppy6", "width=501,height=398");}

var puppy7 = new Raster("puppy7");
puppy7.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy7.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy7.onClick = function(event) {window.open("photos/Puppy7P.jpg", "Puppy7", "width=501,height=398");}

var puppy8 = new Raster("puppy8");
puppy8.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy8.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy8.onClick = function(event) {window.open("photos/Puppy8P.jpg", "Puppy8", "width=501,height=398");}

var puppy9 = new Raster("puppy9");
puppy9.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy9.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy9.onClick = function(event) {window.open("photos/Puppy9P.jpg", "Puppy9", "width=501,height=398");}

var puppy10 = new Raster("puppy10");
puppy10.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy10.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy10.onClick = function(event) {window.open("photos/Puppy10P.jpg", "Puppy10", "width=501,height=398");}

var puppy11 = new Raster("puppy11");
puppy11.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy11.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy11.onClick = function(event) {window.open("photos/Puppy11P.jpg", "Puppy11", "width=501,height=398");}

var puppy12 = new Raster("puppy12");
puppy12.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy12.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy12.onClick = function(event) {window.open("photos/Puppy12P.jpg", "Puppy12", "width=501,height=398");}

var puppy13 = new Raster("puppy13");
puppy13.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy13.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy13.onClick = function(event) {window.open("photos/Puppy13P.jpg", "Puppy13", "width=501,height=398");}

var puppy14 = new Raster("puppy14");
puppy14.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
puppy14.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
puppy14.onClick = function(event) {window.open("photos/Puppy14P.jpg", "Puppy14", "width=501,height=398");}

var ramen1 = new Raster("ramen1");
ramen1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
ramen1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
ramen1.onClick = function(event) {window.open("photos/Ramen1P.jpg", "Ramen1", "width=300,height=423");}

var ring1 = new Raster("ring1");
ring1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
ring1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
ring1.onClick = function(event) {window.open("photos/Ring1P.jpg", "Ring1", "width=421,height=443");}

var sandwich1 = new Raster("sandwich1");
sandwich1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
sandwich1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
sandwich1.onClick = function(event) {window.open("photos/Sandwich1P.jpg", "Sandwich1", "width=458,height=390");}

var spoon1 = new Raster("spoon1");
spoon1.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
spoon1.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
spoon1.onClick = function(event) {window.open("photos/Spoon1P.jpg", "Spoon1", "width=300,height=423");}

var spoon2 = new Raster("spoon2");
spoon2.onMouseEnter = function() {view.element.style.setProperty('cursor', 'pointer');}
spoon2.onMouseLeave = function() {view.element.style.setProperty('cursor', null);}
spoon2.onClick = function(event) {window.open("photos/Spoon2P.jpg", "Spoon2", "width=300,height=423");}

// create a group
var group = new Group();
// move paintings into group
group.addChild(ben);
group.addChild(lily);
group.addChild(bird1);
group.addChild(bird2);
group.addChild(bird3);
group.addChild(bird4);
group.addChild(bird5);
group.addChild(bird6);
group.addChild(bird7);
group.addChild(buritto1);
group.addChild(cab1);
group.addChild(cactus1);
group.addChild(century1);
group.addChild(cookie1);
group.addChild(corn1);
group.addChild(flowers1);
group.addChild(flowers2);
group.addChild(glue1);
group.addChild(hat1);
group.addChild(hotpot1);
group.addChild(napkin1);
group.addChild(parm1);
group.addChild(puppy1);
group.addChild(puppy2);
group.addChild(puppy3);
group.addChild(puppy4);
group.addChild(puppy5);
group.addChild(puppy6);
group.addChild(puppy7);
group.addChild(puppy8);
group.addChild(puppy9);
group.addChild(puppy10);
group.addChild(puppy11);
group.addChild(puppy12);
group.addChild(puppy13);
group.addChild(puppy14);
group.addChild(ramen1);
group.addChild(ring1);
group.addChild(sandwich1);
group.addChild(spoon1);
group.addChild(spoon2);

var rasterW = [];
var rasterY = [];
var dX = [];
var dY = [];
var w, h, x, y, phi, xbound, ybound, xpos, ypos, imgw, imgh;
for (k = 0; k < group.children.length; k++) {
  // give paintings a random position
	group.children[k].position = Point.random() * view.size;
  // store painting dimensions
  w = rasterW[k] = group.children[k].width;
  h = rasterY[k] = group.children[k].height;
  // ensure position is within window frame
  x = group.children[k].position.x;
  y = group.children[k].position.y;
  if (x < w/2 || x + w > view.bounds.width) group.children[k].position.x -= w;
  if (y < h/2 || y + h > view.bounds.height) group.children[k].position.y -= h;
  // create an array of random destinations for each painting
  phi = 2 * Math.PI * Math.random();
  dX[k] = 2 * Math.cos(phi);
  dY[k] = 2 * Math.sin(phi);
}

// move the paintings
function onFrame(event) {
  // change frame rate to 30 fps
  if (event.count % 2 === 0) {
    xbound = view.bounds.width;
    ybound = view.bounds.height;
  	for (i = 0; i < group.children.length; i++) {
      xpos = group.children[i].position.x;
      ypos = group.children[i].position.y;
      imgw = group.children[i].width;
      imgh = group.children[i].height;
      // boundary logic
      if( xpos<imgw/2 || xpos>xbound-imgw/2) dX[i]=-dX[i];
      if( ypos<imgh/2 || ypos>ybound-imgh/2) dY[i]=-dY[i];
      // edge cases (literally)
      if ( xpos+imgw/2 > xbound ) group.children[i].position.x = xbound - imgw/2;
      if ( ypos+imgh/2 > ybound ) group.children[i].position.y = ybound - imgh/2;
      // animate
  		group.children[i].position.x += dX[i];
      group.children[i].position.y += dY[i];
  	}
  }
}
