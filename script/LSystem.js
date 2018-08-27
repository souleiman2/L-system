class LSystem{
	constructor(position, rule, string, unit, changeAngle, div, angle){
		this.angle = angle;
		this.position = [position[0], position[1]];
		
		this.string = string;
		this.rule = rule;
		this.unit = unit;
		this.changeAngle = changeAngle;
		this.div = div;

		this.initPosition = [position[0], position[1]];
		this.initAngle = angle;

		this.savedPosition = [];
		this.savedAngle = [];

		this.strokeWeight = 3;
	}

	doActions(){
		for(var i = 0; i<this.string.length; i++){
			if(this.string[i] === "F"){
				this.advance();
			}else if(this.string[i] === "+"){
				this.turnLeft();
			}else if(this.string[i] === "-"){
				this.turnRight();
			}else if(this.string[i] === "|"){
				this.turnHimself();
			}else if(this.string[i] === "["){
				this.savePosition();
			}else if(this.string[i] === "]"){
				this.comeBackPosition();
			}
		}
	}

	nextIteration(){
		this.position = [this.initPosition[0], this.initPosition[1]];
		this.angle = this.initAngle;
		this.unit /= this.div;
		if(stroke > 1.4){
			this.strokeWeight /= 1.5;
		}

		var message = "";
		for(var i = 0; i<this.string.length; i++){
			var adding = "";
			for (var j = 0; j<this.rule.length && adding == ""; j++){
				if(this.string[i] == this.rule[j][0]){
					adding = this.rule[j][1];
				}
			}
			if(adding == ""){
				adding = this.string[i];
			}
			message += adding;
		}
		this.string = message;
	}
	advance(){
		var move = [cos(radians(this.angle)) * this.unit, sin(radians(this.angle)) * this.unit];
		push();
		stroke(255);
		strokeWeight(this.strokeWeight);
		line(this.position[0], this.position[1], this.position[0] + move[0], this.position[1] + move[1]);
		pop();
		for(var j = 0; j<move.length; j++){
			this.position[j] += move[j];
		}
	}
	turnLeft(){
		this.angle -= this.changeAngle;
	}
	turnRight(){
		this.angle += this.changeAngle;
	}
	turnHimself(){
		this.angle += 180;
	}
	savePosition(){
		this.savedPosition.push([this.position[0], this.position[1]]);
		this.savedAngle.push(this.angle);
	}
	comeBackPosition(){
		let temp = this.savedPosition.pop();
		this.position = [temp[0], temp[1]];
		this.angle = this.savedAngle.pop();
	}

}