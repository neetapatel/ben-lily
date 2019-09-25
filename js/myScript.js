/*var text = new paper.PointText({
  	point: view.center,
		justification: "center",
    content: "Ben Denzer",
    fillColor: "#ed174c",
    font: "htf-didot",
    fontSize: 50,
		strokeColor: "black",
		strokeWidth: 0.5,
});
var text2 = new paper.PointText({
  	point: view.center,
		justification: "center",
    content: "Lily Offit",
    fillColor: "#a893c5",
    font: "htf-didot",
    fontSize: 50
});*/

// Import SVG
// project.importSVG("../img/TypeForNeeta.pdf");

/*
paper.PointText.prototype.wordwrap=function(txt,max){
    var lines=[];
    var space=-1;
    times=0;
    function cut(){
        for(var i=0;i<txt.length;i++){
            (txt[i]==' ')&&(space=i);
            if(i>=max){
                (space==-1||txt[i]==' ')&&(space=i);
                if(space>0){lines.push(txt.slice((txt[0]==' '?1:0),space));}
                txt=txt.slice(txt[0]==' '?(space+1):space);
                space=-1;
                break;
                }}check();}
    function check(){if(txt.length<=max){lines.push(txt[0]==' '?txt.slice(1):txt);txt='';}else if(txt.length){cut();}return;}
    check();
    return this.content=lines.join('\n');
    }

var myText = new paper.PointText(view.center);
myText.justification = 'center';
myText.fillColor = '#ed174c';
myText.font = 'htf-Didot';
myText.fontSize = 150;
myText.strokeColor = 'black';
myText.strokeWidth = 1;
myText.leading = 160;
myText.wordwrap("Ben Denzer Lily Offit June 27, 2020 New York City", 14);
*/

// Add paintings to site
var ben = new Raster("ben");
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

// Create a group
var group = new Group();
// Move paintings into group
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

// Add image out-links
ben.onClick = function(event) {
  window.open("https://bendenzer.com");
}

// Give paintings a random position
for (k = 0; k < group.children.length; k++) {
	group.children[k].position = Point.random() * view.size;
}

// Create an array of random destinations for each painting
var destinations = [];
for (j = 0; j < group.children.length; j++) {
  destinations[j] = Point.random() * view.size;
}

/*
// Tween all paintings
for (i = 0; i < group.children.length; i++) {
	var aTween = group.children[i].tween({'position': destinations[i]}, {duration: 5000});
  aTween.then(function() {
    destinations[i] = Point.random() * view.size;
    group.children[i].tween({'position': destinations[i]}, {duration: 5000});
  });
  aTween.repeat(Infinity);
}
*/


// Move the paintings
function onFrame(event) {
	for (i = 0; i < group.children.length; i++) {
		 var vector = (destinations[i] - group.children[i].position) / 4;
		 vector.normalize(1);
		 group.children[i].position += vector / 50;
		 if (vector.length < 1) {
			 destinations[i] = Point.random() * view.size;
		 }
	}
}
