/*
New version of sketch, using to debug sketch.js
*/

var image1table;
var imageslices;
var lastAngle;
var gray;

function preload(){
    image1table = loadTable("data/image1.csv", "header");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();
}

function draw(){
    background(0);
    // imageslices.display();
    pieChart(500,imageslices);
}

function loadData(){

    imageslices = [];

    for(var i=0; i<image1table.getRowCount(); i++){
        var row = image1table.getRow(i);

        var angles = row.get("angle_not_cummulative");

        imageslices[i] = angles;
    }
}

function pieChart(diameter,data){
    lastAngle = 0;
    for(var j=0; j < data.length; j++){
        gray = map(j,0,data.length,0,255);
        fill(gray);
        arc(windowWidth/2,windowHeight/2,diameter,diameter,lastAngle,lastAngle+radians(data[j]));
        lastAngle += radians(data[j]);
    }
}

/*
class getPercents{
    constructor(angles){
        this.sliceangles = angles*2*PI/360;
    }

    display(){
        stroke(150);
        strokeWeight(2);
        fill(255);
        ellipse(windowWidth/2,windowHeight/2,500,500);
        stroke(150);
        strokeWeight(2);
        fill(255);
        lastAngle = 0;
        for(var j=0; j<this.sliceangles.length; j++){
            arc(windowWidth/2,windowHeight/2,500,500,lastAngle,lastAngle + this.sliceangles[j]);
            lastAngle += this.sliceangles[j];
        }
    }
}
*/