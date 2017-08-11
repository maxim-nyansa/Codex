function showImage() {
    // myImage : ID of image on which to place new image

    var image = document.getElementById('myImage');

    console.log(image.width);

    margin = 20;

    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;


    // Location inside the image
    offX = parseInt(Math.random() * w);
    offY = parseInt(Math.random() * h);

    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;

    l += offX;
    t += offY;

    var newImage = document.createElement("img");
    newImage.setAttribute('src', '../images/car2.png');
    newImage.setAttribute('class', 'overlays');
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    document.body.appendChild(newImage);


}



var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = '../images/car2.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

  //sun.style.height = '20px';
  //  sun.style.width = '20px';  
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();



function anim(){
this.addClass('animated rubberBand');

};

//ading elements to DOM
function addElement(parentId, elementTag, elementId) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('src', 'music.mp3');
    newElement.setAttribute('autoplay', 'true');
    newElement.setAttribute('loop','true');
   // newElement.innerHTML = html;
    p.appendChild(newElement);
}

    function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }




    
    
function toggleSound(){
    //alert(document.getElementById("toggle").checked);
    var music = document.getElementById("music");
    if(document.getElementById("toggle").checked){
        addElement('aud', 'audio', 'music');
        //addElement("aud", "audio", "music")
   // music.setAttribute('autoplay', 'true');
   // music.setAttribute('loop','true');
   
    }
    else{
        removeElement('music');
       // music.removeElement();
       // element.parentNode.removeChild(element);
    }
};
