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
  window.open("https://bendenzer.com");
}

// add all other paintings
var lily = new Raster("lily");
var bird1 = new Raster("bird1");
var bird2 = new Raster("bird2");
var bird3 = new Raster("bird3");
var bird4 = new Raster("bird4");
var bird5 = new Raster("bird5");
var bird6 = new Raster("bird6");
var bird7 = new Raster("bird7");
var buritto1 = new Raster("buritto1");
var cactus1 = new Raster("cactus1");
var century1 = new Raster("century1");
var cookie1 = new Raster("cookie1");
var corn1 = new Raster("corn1");
var flowers1 = new Raster("flowers1");
var glue1 = new Raster("glue1");
var hat1 = new Raster("hat1");
var met1 = new Raster("met1");
var napkin1 = new Raster("napkin1");
var puppy1 = new Raster("puppy1");
var puppy2 = new Raster("puppy2");
var puppy3 = new Raster("puppy3");
var puppy4 = new Raster("puppy4");
var puppy5 = new Raster("puppy5");
var puppy6 = new Raster("puppy6");
var puppy7 = new Raster("puppy7");
var puppy8 = new Raster("puppy8");
var puppy9 = new Raster("puppy9");
var puppy10 = new Raster("puppy10");
var puppy11 = new Raster("puppy11");
var puppy12 = new Raster("puppy12");
var puppy13 = new Raster("puppy13");
var puppy14 = new Raster("puppy14");
var ramen1 = new Raster("ramen1");
var ring1 = new Raster("ring1");
var sandwich1 = new Raster("sandwich1");
var spoon1 = new Raster("spoon1");
var spoon2 = new Raster("spoon2");

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
group.addChild(cactus1);
group.addChild(century1);
group.addChild(cookie1);
group.addChild(corn1);
group.addChild(flowers1);
group.addChild(glue1);
group.addChild(hat1);
group.addChild(met1);
group.addChild(napkin1);
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
