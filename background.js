let slideImg = document.getElementById('slideImg');

let images = new Array (
    "pics/marshmello.jpg",
    "pics/nfl2.jpg",
    "pics/ufc.jpg",
    "pics/football.jpg"
);

let len = images.length;
let i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 4000);
}