canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image="mars.jpg";

rover_image="rover.png";

rover_height=90;
rover_width=90;

rover_x=10;
rover_y=10;

function add(){
background_imgTag= new Image();
background_imgTag.onload= upload_background();
background_imgTag.src=background_image;

rover_imgTag= new Image();
rover_imgTag.onload= upload_rover();
rover_imgTag.src=rover_image;
}
function upload_background(){
ctx.drawImage(background_imgTag, 0 ,0, canvas.width, canvas.height);
}
function upload_rover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width,rover_height );

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypressed=e.keycode;
if(keypressed=='38'){
up();
console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
}

function up(){
if(rover_y >=0){
rover_y=rover_y-10;
upload_background();
upload_rover();
}
}
function down(){
if(rover_y <=500){
    rover_y=rover_y+10;
    upload_background();
    upload_rover();
}
}
function left(){
if(rover_x >=0){
    rover_x=rover_x-10;
    upload_background();
    upload_rover();




}
}
function right(){
if(rover_x <=700){
    rover_x=rover_x+10;
    upload_background();
    upload_rover();



}



}






































































































































































