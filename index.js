var button;
var dimension;
var answer = "L";
var angle = Math.PI;

var rule1 = {
  a:"L",
  b:"-RF+LFL+FR-"
};

var rule2 = {
  a: "R",
  b: "+LF-RFR-FL+"
};


function Hilbert(pos_x, pos_y){
  var temp = "";
  for (var i = 0; i<answer.length;i++){
    if (answer.charAt(i) == rule1.a){
      temp += rule1.b;
    }else if (answer.charAt(i) == rule2.a){
      temp += rule2.b;
    }else{
      temp += answer.charAt(i);
    }
  }
  illustrate(pos_x, pos_y);
  
  
}

function illustrate(pos_x, pos_y){
  stroke(255);
  resetMatrix();
  translate(pos_x, pos_y);
  for (var i = 0; i<answer.length; i++){
    if (answer.charAt(i) == "F"){
      line(0,0,0,len(dimension));
      translate(len(dimension));
    }else if(answer.charAt(i) == "+"){
      rotate(angle);
    }else{
      rotate(-angle);
    }
  }
  dimension /=2;
  
}


function setup(){
  
  button =createButton("Generate");
  createCanvas(400,400);
  background(0);
  pos_x = 20;
  pos_y = 20;
  dimension = canvas.width -40;
  illustrate(pos_x, pos_y);
  button.mousePressed(Hilbert(pos_x, pos_y));
  
  
}
