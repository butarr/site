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

function download(id) {
  var iframe = document.getElementById(id);
  var widget = SC.Widget(iframe);

  widget.getCurrentSound(function(sound){
    var link = document.getElementById('download' + id);
    link.href = sound.download_url + "?client_id=cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ";
    link.click();
  });
}
