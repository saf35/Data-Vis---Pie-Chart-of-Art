/*
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

Current step: create base pie chart (to put images in later)
    Substep: still having issues with displaying arcs, just different issues
*/

// var outerCircleW = 7*windowWidth/8;
// var outerCircle = ellipse(windowWidth/2,windowHeight/2,outerCircleW,outerCircleW);

var image1data; 
var image1table;
var image1arcs;

function preload(){
    image1table = loadTable("data/image1.csv", "header");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();
  
}

function draw(){
    background(0); // black background, to make darker any transparent images
    for(var k=0; k<image1data.length;k++){
        image1data[k].display();
    }
}

function loadTable(){
    // load csv file into a table object

    image1data = []; // array (size depends on table)

    for(var i=0; i < image1table.getRowCount(); i++){
        var row = image1table.getRow(i);
        var arcangle = row.get("angle_from_zero"); // getting arc size for each part of the pie chart
        
        image1data[i] = new ImageOne(arcangle);
    }
}

class ImageOne {
    constructor(sliceangle){
        
        this.angleslice = Number(sliceangle);
        
    }

    display(){ 
        stroke(255);
        strokeWeight(2);
        var innerCircleW = 500;
        ellipse(650,350,innerCircleW,innerCircleW);
        
        // creating pie chart
        stroke(150);
        strokeWeight(2);
        // console.log(this.angleslice);
        arc(650,350,500,500,0,this.angleslice)
    }

}