var BigCircle = {   x:width/2, 
                    y:height/2, 
                    d:width-10, 
                    r: 0, 
                    fill: color(255,0,0), 
                    stroke: color(255,0,0), 
                    strokeWeight: 2};
                    
BigCircle.r = BigCircle.d/2;

var Lines = {   strokeWeight: 2, 
                stroke: color(0) };      // point appearance
var Points = {  strokeWeight: 50, 
                stroke: color(255) };    // line appearance

var pt_deg = 0;             // point angle
var pt_pos = {x: 0, y: 0};  // point position
var ln_deg = 0;             // line angle
var ln_pos = {x: 0, y: 0};  // line position

var num_lines = 4;          // number of lines
var speed = 100;            // frames per second

var drawPoints = function() {
    strokeWeight(Points.strokeWeight);
    stroke(Points.stroke);
    
    for (var l = 0; l < num_lines; l++) {
        ln_pos.x = (BigCircle.r-Points.strokeWeight/2+1)*cos(ln_deg+l*180/num_lines);
        ln_pos.y = (BigCircle.r-Points.strokeWeight/2+1)*sin(ln_deg+l*180/num_lines);
        
        point(  BigCircle.x+ln_pos.x*sin(pt_deg+l*180/num_lines), 
                BigCircle.y+ln_pos.y*sin(pt_deg+l*180/num_lines));
    } // end for
}; // end drawPoints

var drawLines = function() {
    stroke(Lines.stroke);
    strokeWeight(Lines.strokeWeight);
    
    for (var l = 0; l < num_lines; l++) {
        ln_pos.x = BigCircle.r*cos(ln_deg + l*180/num_lines);
        ln_pos.y = BigCircle.r*sin(ln_deg + l*180/num_lines);
        
        line(   BigCircle.x-ln_pos.x, BigCircle.y-ln_pos.y,
                BigCircle.x+ln_pos.x, BigCircle.y+ln_pos.y);
    } // end for
}; // end drawLines

frameRate(speed);
draw = function() {
    background(255);
    pt_deg = (pt_deg + 1) %360;  // increment point position
    
    // Background circle
    strokeWeight(BigCircle.strokeWeight);
    fill(BigCircle.fill);
    stroke(BigCircle.stroke);
    ellipse(BigCircle.x,BigCircle.y,BigCircle.d,BigCircle.d);

    // Show lines if key is pressed
    if(keyIsPressed) {
        drawLines();
    }
    //fill(0);
    //textSize(20);
    //text("1/"+(2*num_lines).toString(),0,20);
    // Points
    drawPoints();
}; // end draw()

keyPressed = function() {
    switch(keyCode) {
        case 76:    // 'L'
        case 108:   // 'l'
            num_lines++;
            break;
        case 75:    // 'K'
        case 107:   // 'k'
            num_lines--;
            break;
        case 74:   // 'J'
        case 106:   // 'j'
            BigCircle.d++;
            
            break;
        case 68:    //'d'
        case 100:   //'D'
            BigCircle.d--;
            break;
    }
};
