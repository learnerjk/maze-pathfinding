# maze-pathing

1. Way to create Maze
  
  a. Default Maze to show differnce on different path finding
  
  b. backtracker -- search for every cell and remove random wall
  
  
  
  

2. Way to do path finding

 a. A*  -- open/close list, queue as data structure to find avaiable nodes. Node.f.g.h value for calculation of next steps
 
 b. breath-first --  open/close list for visual and queue as data structure to loop through maze
 
 c. depth-first -- open/close list for visual and stack as data structure to loop through maze
 
 d. dijkstra -- open/close list for visual and queue as data structure to loop through maze, base on weight from one node to another node, 

bad example for this project since the weight is always 1.

 5. greedy --  open/close list for visual and queue as data structure to loop through maze. Only consider shortest distance from 
 
 current/neighbor node to end node, ignore walls. could be bad sometime.
 
