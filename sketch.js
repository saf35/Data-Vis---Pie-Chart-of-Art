/*
Goal: 
    create a pie chart of several of my art pieces/illustrations/etc. Will allow users
    to choose which art piece they want to look at. The pie graph's slices will consist of
    each step of my drawing process, and the size of the slice will correspond to the 
    "time" it took to finish that part. (The reason why I say "time" is that I don't know 
    the actual time I spent on it, since the replay function in my drawing program doesn't 
    record my process, but rather each stroke of the brush is a frame.)

Current step: create base pie chart (to put images in later)
*/

var image1data; 
var image1table;

function preload(){
    image1table = loadTable("data/image1.csv", "header");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();
}

function draw(){
    background(255); // black background, to make darker any transparent images
}

function loadData(){
    // load csv file into a table object

    image1data = []; // array (size depends on table)

    for(var i=0; i < image1table.getRowCount(); i++){
        var row = image1table.getRow();
        var filnam = row.get("Image Title"); // getting "file names"
        var timestam = row.get("Percentage of total time");
        image1data[i] = new ImageOne(filnam,timestam);
    }
}

class ImageOne {
    constructor(nameoffile,timemark){
        this.nameoffile = Number(nameoffile);
        this.timemark = Number(timemark)
    }

    display(){ // displaying the graph
        var innerCircleW = windowWidth/4;
        var innerCircleH = windowHeight/4;
        var outerCircleW = 2*windowWidth/5;
        var outerCircleH = 2*windowHeight/5;
        var innerCircle = ellipse(windowWidth/2,windowHeight/2,innerCircleW,innerCircleH);
        var outerCircle = ellipse(windowWidth/2,windowHeight/2,outerCircleW,outerCircleH);
    }

}