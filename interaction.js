

var cat_img=document.getElementById("cat_img");

var button=document.getElementById("button");


cat_img.addEventListener("click", meow);

button.addEventListener("click", feed);

button2.addEventListener("click", purr2);

button3.addEventListener("click", fast);

function meow(){
	alert("MEW!");
};

function purr(){
	alert("PURR");
};

function purr2(){
	alert("PURRRRRRRRRRRRRR");
};

function feed(){
	cat_img.style.width=(cat_img.offsetWidth+30)+'px'
};

function fast(){
	cat_img.style.width=(cat_img.offsetWidth-30)+'px'
};

//Containers

//Arrays

var my_array=[1,2,3];

console.log(my_array[1]);

//Objects

var my_cat={
	name: 'Fluffy',
	weight:5.5,
	previous_weights: [4,3,6],
};

console.log(my_cat);

var old_array=[1,2,3];

var filtered_array = old_array.filter(function(old_array_element){return old_array_element>2});

console.log(filtered_array);
