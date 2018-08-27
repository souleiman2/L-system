let image;
let cote = 600;
let espace = 20;

function setup(){
	createCanvas(cote * 2,cote);
	background(0);

	let temp = location.search.substring(1).split("&");
	console.log(temp)

	let value = 0;
	if(temp.length == 1){
		value = decodeURI(temp[0].split("=")[1]);
		console.log(value);
	}

	switch(value){
		case "1":
			//Koch curve (1)
			image = new LSystem([espace,cote - espace], [["F", "F+F-F-F+F"]], "F", 150, 90, 2, 0);
			break;
		case "2":
			//Hilbert curve (2)
			image = new LSystem([cote/2, cote/2], [["L", "-RF+LFL+FR-"], ["R", "+LF-RFR-FL+"]], "L", 400, 90, 2.2, 0);
			break;
		case "3":
			//Fractal Trees (from the coding train) (3)
			image = new LSystem([cote, cote], [["F", "FF+[+F-F-F]-[-F+F+F]"]], "F", 80, 30, 1.6, 270);
			break;
		case "4":
			//Arrowhead curve (4)
			image = new LSystem([cote, cote/2], [["X", "YF+XF+Y"], ["Y", "XF-YF-X"]], "XF", 150, 60, 1.75, 0);
			break;
		case "5":
			//dragon curve (5)
			image = new LSystem([cote, cote/2], [["X", "X+YF+"], ["Y", "-FX-Y"]], "FX", 100, 90, 1.3, 0);
			break;
		case "6":
			//Peano-Gosper curve (6)
		 	image = new LSystem([cote, cote], [["X", "X+YF++YF-FX--FXFX-YF+"], ["Y", "-FX+YFYF++YF+FX--FX-Y"]], "X", 50, 60, 1.5, 0);
		 	break;
		case "7":
			//Quadratic Koch island (7)
			image = new LSystem([cote/2, cote/4], [["F", "F-F+F+FF-F-F+F"]], "F-F-F-F", 80, 90, 2.7, 0);
			break;
		case "8":
			//The Sierpinsky square (8) link : http://personalpages.to.infn.it/~zaninett/fractals.html#FRATTALI
			image = new LSystem([espace, espace], [["F", "FF-F-F-F-FF"]], "F-F-F-F", 175, 90, 2.4, 0);
			break;
		default:
			//(0) do it yourself
			let x = parseInt(decodeURI(temp[0].split("=")[1]));
			let y = parseInt(decodeURI(temp[1].split("=")[1]));

			let rule1 = decodeURI(temp[2].split("=")[1]);
			let rule2 = decodeURI(temp[3].split("=")[1]);
			let rule3 = decodeURI(temp[4].split("=")[1]);
			let rule4 = decodeURI(temp[5].split("=")[1]);
			let rule5 = decodeURI(temp[6].split("=")[1]);
			let rule6 = decodeURI(temp[7].split("=")[1]);

			let rule_init = decodeURI(temp[8].split("=")[1]);
			let taille = parseInt(decodeURI(temp[9].split("=")[1]));
			let angle = parseInt(decodeURI(temp[10].split("=")[1]));
			let angle_init = parseInt(decodeURI(temp[11].split("=")[1]));

			rule1 = everyOccurence(rule1);
			rule2 = everyOccurence(rule2);
			rule_init = everyOccurence(rule_init);

			let array = [[rule1, rule2]]
			if(rule3 != "" && rule4 != ""){
				array.push([rule3, rule4]);
			}

			if(rule5 != "" && rule6 != ""){
				array.push([rule5, rule6]);
			}
			image = new LSystem([cote*2*x/100, cote * y/100],  array, rule_init, taille, angle, 2, angle_init);

			break;

	}

	image.doActions();
}
function everyOccurence(temp){	
	while (temp.includes("%2B")){
		temp = temp.replace("%2B", "+");
	}
	return temp;
}


function mousePressed(){
	background(0);
	image.nextIteration();
	image.doActions();
}