
var w = 40;
var width = 400;
var height = 400;
var cols = width/w;
var rows = height/w;

var grid_bf = [];
var grid_df = [];
var visit_color = 'black'
var maze_done = false;
var stack = []
var current;

var common_grid = []

for(var i = 0; i < cols*rows;i++){
  common_grid[i] = [true,true,true,true];
}


var maze = function( p ) { 
  p.setup = function() {
    p.createCanvas(width, height);
    p.frameRate(40);
    for (var j =0; j<rows;j++){
      for(var i =0;i<cols;i++){
        var wall = [true,true,true,true];
        var cell = new Cell(i,j,p,common_grid[j*rows+i]);
          grid_bf.push(cell)
        }
    }
  }
  p.draw = function () {
    // 220 grey
    p.background('black');
    // frameRate(5);
    for(var i = 0; i < grid_bf.length;i++){
      grid_bf[i].show();
    }
    maze_done = backtracker(grid_bf);
    if(maze_done){
      p.noLoop()
    }
  }
};

var maze = new p5(maze, 'maze');


function path_reset(){
    for(var i = 0; i < grid.length;i++){
      grid[i].visited = false;
      grid[i].highlight('black');
    }
}

var maze_bf = function( p ) { 
  p.setup = function() {
    p.createCanvas(width, height);
    p.frameRate(40);
        for (var j =0; j<rows;j++){
      for(var i =0;i<cols;i++){
        var wall = [true,true,true,true];
        var cell = new Cell(i,j,p,common_grid[j*rows+i]);
          grid_df.push(cell)
        }
    }

  }
  p.draw = function () {
    p.background('black');

      for(var i = 0; i < grid_df.length;i++){
      grid_df[i].show();
        }
  }
};

var maze_bf = new p5(maze_bf, 'maze_bf');



