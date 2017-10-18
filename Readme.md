Robot Coding Test

You need to write code that delivers the following requirements. Please read them carefully
and implement as much as you can, as best as you can, within 24 hours.
Code requirement
1. Javascript using React framework
2. Huge advantage if you can use Redux.

Description
This is a simulator of a “toy robot”. You will be writing code to place and move the “robot” within a grid on a tabletop. Graphical output is required. The robot will be placed and move on a square tabletop, of dimensions 5 units x 5 units (Or definable by user). There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be placed within the table grid and prevented from falling to destruction. Any placement or movement that would result in the robot falling from the table must be ignored, however further valid movement commands must still be allowed.

Create an application that can read in commands of the following form:
• PLACE X,Y,F
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner.
The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
Place function will create New Session. If current session is already active, it will be finished.

• MOVE
MOVE will move the toy robot one unit forward in the direction it is currently facing.

• LEFT & RIGHT
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without
changing the position of the robot.

• SAVE
Save robot movement log in json format to this url https://test.interaktiv.sg/
robot-test/. The json for the log should look like this:
[{
“action”: “PLACE”, // the action created from the robot.
“value”: “1,2,NORTH”, // current position of the robot.
“creator”: “youremail@domain.com" // your email
},...]
Request Header :
• Content-Type: application/json
• Authorization: test-robot-interaktiv
• email: {Your Email}
Request Method: POST
Request Mode: CORS

• GUI
HTML graphical user interfaces of the robot.

Important Notes:
Please do not copy codes from another sources to implement functionality of
this test. Please use React Javascript Framework. If you don’t understand the requirement
please contact us eko@interaktiv.sg or chuan@interaktiv.sg.

Process
• Create or use your free Github account for this code
• Commit your code based on what you think it’s the best practice
• Spend a maximum of 12 hours, we will calculate from first time commit to latest
commit.

Deliverables
Give us the GITHUB project url, so we can review your progress based on what you’ve committed and we will review your code.
You don’t need to complete this task 100%, we will rate base on your understanding of the problem.