function Node(x,y){
	this.x = x;
	this.y = y;


	// for a star
	this.f = 500000;
	this.g = 0;
	this.h = cols+rows-this.x-this.y-2;;
	this.previous = undefined;

	this.getNodeIndex = function(){
		return this.x+this.y*cols;
	}
	this.getNeighbor = function(){
		// top right bot left
		// this.wall = [true,true,true,true];
		neighbor = []
		//top
		if (grid[this.x+this.y*cols].wall[0] == false){
			neighbor.push(new Node(this.x,this.y-1));
		}
		//right
		if (grid[this.x+this.y*cols].wall[1] == false  ){
			neighbor.push(new Node(this.x+1,this.y));
		}
		//bot
		if (grid[this.x+this.y*cols].wall[2] == false ){
			neighbor.push(new Node(this.x,this.y+1));
		}
		//left
		if (grid[this.x+this.y*cols].wall[3] == false ){
			neighbor.push(new Node(this.x-1,this.y));
		}
		return neighbor
	}

}