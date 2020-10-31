var ambientLight;
var directionalLight;

var sceneEl = document.querySelector('a-scene');
//var lightAmb = sceneEl.querySelector('a-light');

var eventEl = sceneEl.querySelector('a-entity');

var animation__mouseEnter = document.createAttribute("animation__mouseEnter");
var animation__mouseLeave = document.createAttribute("animation__mouseLeave");
animation__mouseEnter.value ="property: object3D.position.x; to: 1; dir: alternate; dur: 3000; loop: 1; startEvents: mouseenter";
animation__mouseLeave.value ="property: object3D.position.x; to: 0; dir: alternate; dur: 3000; loop: 1; startEvents: mouseleave";
eventEl.setAttributeNode(animation__mouseEnter);
eventEl.setAttributeNode(animation__mouseLeave);

//animation="property: object3D.position.x; to: 1; dir: alternate; dur: 3000; loop: 1"


//var eventEl = sceneEl.querySelector('a-entity');
/*
entityEl.addEventListener('onclick', function () {
    console.log('Entity collided with');
});
*/




//ambientLight = document.createElement('a-entity');
//directionalLight = document.createElement('a-entity');
//ambientLight.setAttribute('light', {color: 'white', type: 'ambient', 'intensity': 2});

//lightAmb.intensity = 5;


//pointLight = document.createElement('a-entity');
//pointLight.setAttribute('light', {type: 'point', intensity: '10', distance: 50, decay: 2});
//pointLight.setAttribute('position', { x: 2, y: 4.9, z: -3 });  //2 4.9 -3


console.log("Hello " );

//sceneEl.appendChild(ambientLight);
//console.log("HELLO");