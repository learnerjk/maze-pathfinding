var g_open_list = []
var g_close_list = []
var g_path= [];
var g_begin = true;
function greedy(){
	if(g_begin){
        path_reset();
		var start = new Node(0,0);
    	g_open_list.push(start);
    	g_begin = false;
	}


    if(g_open_list.length > 0){
    	for(var i = 0;i<g_open_list.length;i++){
    		node_index = g_open_list[i].getNodeIndex();

    		grid[node_index].highlight('green');
    	}
    	for(var i = 0;i<g_close_list.length;i++){
    		node_index = g_close_list[i].getNodeIndex();
    		grid[node_index].highlight('yellow');
    	}

    	for (var i = 0;i<g_path.length;i++){
    		node_index = g_path[i].getNodeIndex();
    		grid[node_index].highlight('skyblue');
    	}

    	grid[0].highlight('green');
      	grid[rows*cols-1].highlight('red');

		// check open list
		current_node = g_open_list[0]
		current_index =  0;
		for(var n = 0;n<g_open_list.length;n++){
    		if(g_open_list[n].h< current_node.h){
    			current_node = g_open_list[n];
    			current_index =  n;
    		}
    	}
        // g_open_list remove current index
        g_open_list.splice(current_index, 1)
        // add current index to close list
        g_close_list.push(current_node);
    	if(current_node.x+1 == cols && current_node.y+1 == rows){
    		console.log('done');
    		// get g_path;
    		g_path = [];
    		var temp = current_node;
    		g_path.push(temp);
    		while(temp.previous){
    			g_path.push(temp.previous);
    			temp = temp.previous;
    		}
    		return true;

    	}

    	var neighbors = current_node.getNeighbor();
    	for( var i = 0; i < neighbors.length;i++){
    		var neig = neighbors[i];

    		if(!checkExist(g_close_list,neig)){
    			g_open_list.push(neig);
    		}
    		neig.previous = current_node;
    	}
    }else{

    	return true;
    }

}
