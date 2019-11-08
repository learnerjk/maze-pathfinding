var bt_begin = true;
function backtracker(grid){
  if(bt_begin){
    current =grid[0];
    bt_begin=false;
  }
  current.visited = true;
  // 1 choose random neigbor
  neighbors = current.checkNeighbors(grid);
  if(neighbors.length>0){
      var r = Math.floor(Math.random() * neighbors.length); 
      var next =  neighbors[r];
  }else{
      var next =  undefined;
  }
  if(next){
  	//2 push to stack
  	stack.push(current);
  	//3 remove walles
  	removeWalls(current,next);

  	//4  mark it as visited 
  	next.visited = true;
  	current = next;
  }else if (stack.length>0){
  	current = stack.pop();
  }else{
    // stop drawing
    //noLoop();
    return true;
    //reset()

  }

}

// top right bot left
function removeWalls(current,next){
	var x = current.i-next.i;
	if(x == 1){
		current.wall[3] = false;
		next.wall[1] = false;
	}else if(x == -1){
		current.wall[1] = false;
		next.wall[3] = false;
	}

	var y = current.j - next.j;

	if(y == 1){
		current.wall[0] = false;
		next.wall[2] = false;
	}else if(y == -1){
		current.wall[2] = false;
		next.wall[0] = false;
	}

}



