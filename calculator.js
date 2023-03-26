// JavaScript Document
{
	var gcalories = document.getElementById("result");
}
function result()
{
	var result = document.getElementById("result");
	output.innerHTML = '<h3>Your calorie goal is '+result.value+'</h3>';
}

function breakfast()
{
	
	
	if(gcalories.value == 0){
		gcalories = document.getElementById("result");
	}
	var e = document.getElementById("breakfast");
	var text = e.options[e.selectedIndex].text;
	var value = e.value;
	var result = Number(gcalories.value) - value;
	output.innerHTML = '<h3>Your new calorie goal is '+result+' after adding '+text+' </h3>';
}

function lunch()
{
	var calories = document.getElementById("result");
	var e = document.getElementById("lunch");
	var text = e.options[e.selectedIndex].text;
	var value = e.value;
	var result = Number(calories.value) - value;
	output.innerHTML = '<h3>Your new calorie goal is '+result+' after adding '+text+' </h3>';
}

function dinner()
{
	var calories = document.getElementById("result");
	var e = document.getElementById("dinner");
	var text = e.options[e.selectedIndex].text;
	var value = e.value;
	var result = Number(calories.value) - value;
	output.innerHTML = '<h3>Your new calorie goal is '+result+' after adding '+text+' </h3>';
}

function snack()
{
	var calories = document.getElementById("result");
	var e = document.getElementById("snacks");
	var text = e.options[e.selectedIndex].text;
	var value = e.value;
	var result = Number(calories.value) - value;
	output.innerHTML = '<h3>Your new calorie goal is '+result+' after adding '+text+' </h3>';
}

var cal=document.getElementById('Submit');
cal.addEventListener('click',result,false);

var breakf=document.getElementById('breakfastButton');
breakf.addEventListener('click',breakfast,false);

var lunchf=document.getElementById('lunchButton');
lunchf.addEventListener('click',lunch,false);

var dinnerf=document.getElementById('dinnerButton');
dinnerf.addEventListener('click',dinner,false);

var snacksf=document.getElementById('snacks');
snacksf.addEventListener('click',snack,false);