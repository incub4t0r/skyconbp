var skycons = new Skycons({"monochrome": false});          

window.onload = function(){
    skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
    skycons.play();  
}