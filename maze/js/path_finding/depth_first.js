var df_open_list = []
var df_close_list = []
var df_path= [];
var df_start = true;

function depth_first(){
	if(df_start){
		path_reset();
		var start = grid[0];
    	df_open_list.push(start)
		df_start = false;
	}

	// draw will do the loop job
	//Loop on the open list as long as it's not empty.
    if(df_open_list.length > 0){
    	for(var i = 0;i<df_open_list.length;i++){
    		node_index = index(df_open_list[i].i,df_open_list[i].j);
    		grid[node_index].highlight('green');
    	}
    	for(var i = 0;i<df_close_list.length;i++){
    		node_index =  index(df_close_list[i].i,df_close_list[i].j); 
    		grid[node_index].highlight('yellow');
    	}

    	for (var i = 0;i<df_path.length;i++){
    		node_index = index(df_path[i].i,df_path[i].j);   
    		grid[node_index].highlight(color('rgb(103, 212, 219)'));
    	}
    	grid[0].highlight(color('rgb(103, 219, 134)'));
      	grid[rows*cols-1].highlight('red');
      	
		// check open list
        last_index = df_open_list.length-1;
		current_node = df_open_list[last_index];
		df_close_list.push(current_node);

		df_open_list.splice(last_index, 1)
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
	    		// get df_path;
	    		df_path = [];
	    		var temp = neig;
	    		df_path.push(neig);
	    		while(temp.previous){
	    			df_path.push(temp.previous);
	    			temp = temp.previous;
	    		}
	    		return true;
    		}else{
    			df_open_list.push(neig);
    		}
    	}
    }else{
    	return true;
    }
}