function play(id) {
  var iframe = document.getElementById(id);
  var widget = SC.Widget(iframe);
  widget.play();
  widget.getCurrentSound(function(sound){
    console.log(">>>>>", sound);
  });
}

function pause(id) {
  var iframe = document.getElementById(id);
  var widget = SC.Widget(iframe);
  widget.pause();
}

function download() {
  var link = document.getElementById('download1');
  link.href = "https://api.soundcloud.com/tracks/290049982/download?client_id=cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ";
  link.click();
}
