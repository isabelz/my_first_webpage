
var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nation.json";

d3.json(dataUrl, function(nations){

var chart_area = d3.select('#chart_area');

var frame = chart_area.append("svg");

var canvas = frame.append("g");

var dot = canvas.append("circle");

// Set margins, width, and height.
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
var frame_width = 960;
var frame_height = 350;
var canvas_width = frame_width - margin.left - margin.right;

frame.attr("width", frame_width);
frame.attr("height", frame_height);

canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

dot.attr("cx", 70);
dot.attr("cy", 20)
dot.attr("r", 20);




})


