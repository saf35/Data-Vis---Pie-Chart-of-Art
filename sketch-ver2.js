/*
New version of sketch, using to debug sketch.js

Goal: 
    create a pie chart of several of my art pieces/illustrations/etc. Will allow users
    to choose which art piece they want to look at. The pie graph's slices will consist of
    each step of my drawing process, and the size of the slice will correspond to the 
    "time" it took to finish that part. (The reason why I say "time" is that I don't know 
    the actual time I spent on it, since the replay function in my drawing program doesn't 
    record my process, but rather each stroke of the brush is a frame.)

Resources:
    - Used p5.js example on pie charts to help build the pie chart:
        https://p5js.org/examples/form-pie-chart.html
        https://p5js.org/reference/#/p5/arc (more updated than above)
        - Used this webpage to help explain arc() function documentation:
            https://www.geeksforgeeks.org/p5-js-arc-function/ 

Current goal: pieChart using class
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
    imageslices.display();
    // pieChart(500,imageslices);
}

function loadData(){

    imageslices = [];

    for(var i=0; i<image1table.getRowCount(); i++){
        var row = image1table.getRow(i);

        var angles = row.get("angle_not_cummulative");

        imageslices[i] = angles;
    }
}

class getPercents{
    constructor(angles,diameter,data){
        this.sliceangles = angles*2*PI/360;
        this.diameter = diameter;
        this.data = data;
    }

    display(){
        function pieChart(diameter,data){
            lastAngle = 0;
            for(var j=0; j < data.length; j++){
                gray = map(j, 0, data.length, 0, 255);
                fill(gray);
                arc(windowWidth/2,windowHeight/2,diameter,diameter,lastAngle,lastAngle+radians(data[j]));
                lastAngle += radians(data[j]);
            }
        }
    }
}