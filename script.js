var ambientLight;
var directionalLight;

var sceneEl = document.querySelector('a-scene');
var lightAmb = sceneEl.querySelector('a-light');

//ambientLight = document.createElement('a-entity');
//directionalLight = document.createElement('a-entity');
//ambientLight.setAttribute('light', {color: 'white', type: 'ambient', 'intensity': 2});

lightAmb.intensity = 5;


//pointLight = document.createElement('a-entity');
//pointLight.setAttribute('light', {type: 'point', intensity: '10', distance: 50, decay: 2});
//pointLight.setAttribute('position', { x: 2, y: 4.9, z: -3 });  //2 4.9 -3


console.log("Hello " );

//sceneEl.appendChild(ambientLight);
//console.log("HELLO");