// $.getJSON("https://api.smartcitizen.me/v0/devices/3545", function(data){
//   console.log(data);
// })
var url1 = "https://api.smartcitizen.me/v0/devices/3545/readings?sensor_id=15&rollup=1m&from=2016-07-17&to=2016-07-20";
// var url3 = "https://api.smartcitizen.me/v0/devices/3545/readings?sensor_id=15&rollup=8h&function=min&from=2016-07-17&to=2016-07-20";

$.getJSON(url1, function(data){
	console.log(data);
})