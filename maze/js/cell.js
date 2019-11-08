function Cell(i,j,p,wall){
	this.i = i;
	this.j = j;
	this.p = p;
	// top right bot left
	this.wall = wall;
	this.visited = false;

	this.checkNeighbors = function(grid){
		var neighbors = [];
		var top = grid[index(i,j-1)];
		var right = grid[index(i+1,j)];
		var bottom = grid[index(i,j+1)];
		var left = grid[index(i-1,j)];

		if(top && !top.visited){
			neighbors.push(top);
		} 
		if(right && !right.visited){
			neighbors.push(right);
		}
		if(bottom && !bottom.visited){
			neighbors.push(bottom);
		}
		if(left && !left.visited){
			neighbors.push(left);
		}
		return neighbors;
	}

	this.getNeighbors = function(grid){
		var neighbors = [];
		var top = grid[index(i,j-1)];
		var right = grid[index(i+1,j)];
		var bottom = grid[index(i,j+1)];
		var left = grid[index(i-1,j)];
		if(!this.wall[0] && !top.visited){
			// top
			neighbors.push(top);
		}
		if(!this.wall[1] && !right.visited){
			// right
			neighbors.push(right);
		}
		if(!this.wall[2] && !bottom.visited){
			// bot
			neighbors.push(bottom);
		}
		if(!this.wall[3] && !left.visited){
			// left
			neighbors.push(left);
		}
		return neighbors;

	}
	this.highlight = function(fill_color){

		if(fill_color == undefined){
			fill_color = 'black'
		}
		p.noStroke()
		var x = this.i*w+w/4;
		var y = this.j*w+w/4;
		// yellow
		p.fill(fill_color);
		//ellipse(10, 20, 10, 10);
		p.rect(x, y, w/2, w/2);
	}

	this.show = function(){
		var x = this.i*w;
		var y = this.j*w;
		p.stroke('white');

		if(this.wall[0]){
			// top
			// top left to top right
			p.line(x,y,x+w,y);

		}
		if(this.wall[1]){
			// right
			// top right to bot right
			p.line(x+w,y,x+w,y+w);
		}
		if(this.wall[2]){
			// bot
			// bot right to bot left
			p.line(x+w,y+w,x,y+w);
		}
		if(this.wall[3]){
			// left
			// bot left to top left
			p.line(x,y+w,x,y);
		}

		
		if(this.visited){
			p.noStroke()
			// yellow
			p.fill(visit_color);
			p.rect(x, y, w, w);
		}


	}
}

function index(i,j){
	if (i<0 || j<0 || i>cols-1 || j>rows-1){
		return -1;
	}
	return i+j*cols;
}