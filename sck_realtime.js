io.connect('wss://smartcitizen.xyz').on('data-received', function(device) {
  if(device.data.id==3545){
	console.log(device);
   $('body').append("<div>" + device.data.name + "</div>");   
  }

});