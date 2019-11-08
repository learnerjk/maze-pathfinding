var bf_open_list = []
var bf_close_list = []
var bf_path= [];
var bf_start = true;

function breath_first(){
	if(bf_start){
		path_reset();
		var start = grid[0];
    	bf_open_list.push(start)
		bf_start = false;
	}

	// draw will do the loop job
	//Loop on the open list as long as it's not empty.
    if(bf_open_list.length > 0){
    	for(var i = 0;i<bf_open_list.length;i++){
    		node_index = index(bf_open_list[i].i,bf_open_list[i].j);
    		grid[node_index].highlight('green');
    	}
    	for(var i = 0;i<bf_close_list.length;i++){
    		node_index =  index(bf_close_list[i].i,bf_close_list[i].j); 
    		grid[node_index].highlight('yellow');
    	}

    	for (var i = 0;i<bf_path.length;i++){
    		node_index = index(bf_path[i].i,bf_path[i].j);   
    		grid[node_index].highlight(color('rgb(103, 212, 219)'));
    	}
    	grid[0].highlight(color('rgb(103, 219, 134)'));
      	grid[rows*cols-1].highlight('red');
      	
		// check open list
		current_node = bf_open_list[0];
		bf_close_list.push(current_node);

		bf_open_list.splice(0, 1)
		// add current index to close list
		current_node.visited = true;
    	

    	// get un-visited and not-wall neighbors
		var neighbors = current_node.getNeighbors();
		// For every non-visited child of the current node
		for( var i = 0; i < neighbors.length;i++){
    		var neig = neighbors[i];
    		// Mark it as visited.
    		neig.visited = true;
    		neig.previous = current_node;
    		if(neig.i+1 == cols && neig.j+1 == rows){
	    		console.log('done');
	    		// get bf_path;
	    		bf_path = [];
	    		var temp = neig;
	    		bf_path.push(neig);
	    		while(temp.previous){
	    			bf_path.push(temp.previous);
	    			temp = temp.previous;
	    		}
	    		return true;
    		}else{
    			bf_open_list.push(neig);
    		}
    	}
    }else{
    	return true;
    }
}