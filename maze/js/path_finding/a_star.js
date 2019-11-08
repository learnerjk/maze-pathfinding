var astar_open_list = []
var astar_close_list = []
var astar_path= [];
var astar_begin = true;
function a_star(){
	if(astar_begin){
        path_reset();
		var start = new Node(0,0);
    	astar_open_list.push(start);
    	astar_begin = false;
	}


    if(astar_open_list.length > 0){
    	for(var i = 0;i<astar_open_list.length;i++){
    		node_index = astar_open_list[i].getNodeIndex();

    		grid[node_index].highlight('green');
    	}
    	for(var i = 0;i<astar_close_list.length;i++){
    		node_index = astar_close_list[i].getNodeIndex();
    		grid[node_index].highlight('yellow');
    	}

    	for (var i = 0;i<astar_path.length;i++){
    		node_index = astar_path[i].getNodeIndex();
    		grid[node_index].highlight(color('rgb(103, 212, 219)'));
    	}

    	grid[0].highlight(color('rgb(103, 219, 134)'));
      	grid[rows*cols-1].highlight('red');

		// check open list
		current_node = astar_open_list[0]
		current_index =  0;
		for(var n = 0;n<astar_open_list.length;n++){
    		if(astar_open_list[n].f< current_node.f){
    			current_node = astar_open_list[n];
    			current_index =  n;
    		}
    	}
    	console.log(current_node)
    	if(current_node.x+1 == cols && current_node.y+1 == rows){
    		console.log('done');
    		// get astar_path;
    		astar_path = [];
    		var temp = current_node;
    		astar_path.push(temp);
    		while(temp.previous){
    			astar_path.push(temp.previous);
    			temp = temp.previous;
    		}
    		return true;

    	}

    	// astar_open_list remove current index
    	astar_open_list.splice(current_index, 1)
    	// add current index to close list
    	astar_close_list.push(current_node);

    	var neighbors = current_node.getNeighbor();
    	for( var i = 0; i < neighbors.length;i++){
    		var neig = neighbors[i];

    		if(!checkExist(astar_close_list,neig)){
    			var tempG = current_node.g+1;
    			if(checkExist(astar_open_list,neig)){
    				if(tempG < neig.g){
    					neig.g = tempG;
    				}
    			}else{
    				neig.g = tempG;
    				astar_open_list.push(neig);
    			}
    		}
    		neig.f = neig.g + neig.h;
    		neig.previous = current_node;
    	}
    }else{

    	return true;
    }

}



function checkExist(list,neig){
	for( var i = 0; i < list.length;i++){
		if(list[i].x == neig.x && list[i].y == neig.y){
			return true;
		}
	}
	return false;

}