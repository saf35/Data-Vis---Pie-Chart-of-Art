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
var allimages = [];
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;

function preload(){
    image1table = loadTable("data/image1.csv", "header");
    image1 = loadImage("images/part1.jpg");
    image2 = loadImage("images/part2.jpg");
    image3 = loadImage("images/part3.jpg");
    image4 = loadImage("images/part4.jpg");
    image5 = loadImage("images/part5.jpg");
    image6 = loadImage("images/part6.jpg");
    image7 = loadImage("images/finalpiece.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();
    allimages = [image1,image2,image3,image4,image5,image6,image7];
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
        
        triangle(0,windowHeight,timespenth,timespentw,timespentw*2,windowHeight);
    }
}