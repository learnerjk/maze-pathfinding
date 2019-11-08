var dj_open_list = []
var dj_close_list = []
var dj_path= [];
var dj_begin = true;
function dijkstra(){
	if(dj_begin){
        path_reset();
		var start = new Node(0,0);
        start.f = 0;
    	dj_open_list.push(start);
    	dj_begin = false;
	}


    if(dj_open_list.length > 0){
    	for(var i = 0;i<dj_open_list.length;i++){
    		node_index = dj_open_list[i].getNodeIndex();

    		grid[node_index].highlight('green');
    	}
    	for(var i = 0;i<dj_close_list.length;i++){
    		node_index = dj_close_list[i].getNodeIndex();
    		grid[node_index].highlight('yellow');
    	}

    	for (var i = 0;i<dj_path.length;i++){
    		node_index = dj_path[i].getNodeIndex();
    		grid[node_index].highlight(color('rgb(103, 212, 219)'));
    	}

    	grid[0].highlight(color('rgb(103, 219, 134)'));
      	grid[rows*cols-1].highlight('red');

		// check open list
		current_node = dj_open_list[0];
		current_index =  0;
		for(var n = 0;n<dj_open_list.length;n++){
    		if(dj_open_list[n].f< current_node.f){
    			current_node = dj_open_list[n];
    			current_index =  n;
    		}
    	}

        // dj_open_list remove current index
        dj_open_list.splice(current_index, 1)
        // add current index to close list
        dj_close_list.push(current_node);

    	if(current_node.x+1 == cols && current_node.y+1 == rows){
    		console.log('done');
    		// get dj_path;
    		dj_path = [];
    		var temp = current_node;
    		dj_path.push(temp);
    		while(temp.previous){
    			dj_path.push(temp.previous);
    			temp = temp.previous;
    		}
    		return true;

    	}

    	var neighbors = current_node.getNeighbor();
    	for( var i = 0; i < neighbors.length;i++){
    		var neig = neighbors[i];
    		if(!checkExist(dj_close_list,neig)){
    			var tempF = current_node.f+1;
    			if(checkExist(dj_open_list,neig)){
    				if(tempF < neig.f){
    					neig.f = tempF;
    				}
    			}else{
    				neig.g = tempF;
    				dj_open_list.push(neig);
    			}
    		}
    		neig.previous = current_node;
    	}
    }else{

    	return true;
    }

}


