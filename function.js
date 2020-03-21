var x = 0 // Starting point for the 1st image
var images = [];
var time = 1500; // The time it takes to switch pictures

// All of the images

images[0] = 'pictures/archery.jpg';
images[1] = 'pictures/zipline.jpg';
images[2] = 'pictures/group.jfif';
images[3] = 'pictures/rope climb.jpg';


//changes image
function change(){ 
    document.getElementById('one').src = images[x];
    if(x < images.length -1){
        x++;    
    }
    else{
        x = 0;  //If it is at the last image, it will reset
    }
    setTimeout("change()", time);
}

window.onload = change;