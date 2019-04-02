/*
New sketch, no longer doing pie chart.

Goal: make a graph that shows how long I spend on each part of a drawing. I will use 
embedded triangles to demonstrate the relative time I spent on each part.

References:
    https://p5js.org/reference/#/p5/triangle
        Triangle function documentation

Current goal: display images inside triangles
*/

var image1table;
var triangles;
var sizes;

function preload(){
    image1table = loadTable("data/image1.csv", "header");
    var 
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();
}

function draw(){
    background(150);

    for(var i=0; i < triangles.length; i++){
        triangles[i].display();
    }
}

function loadData(){

    triangles = [];

    for(var i=0; i<image1table.getRowCount(); i++){
        var row = image1table.getRow(i);

        sizes = row.get("percentage_of_total_time");

        triangles[i] = new triangleGraph(sizes);
    }
}

class triangleGraph{
    constructor(h){
        this.h = h; // triangle heights
    }

    display(){
        stroke(0);
        strokeWeight(1);
        noFill();
        var timespenth = windowHeight*(1-this.h);
        var timespentw = (windowWidth/2)*this.h;
        triangle(0,windowHeight,timespenth,timespentw,timespentw*2,windowHeight);
    }
}