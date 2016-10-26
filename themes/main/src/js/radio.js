function getWidget(id) {
  var iframe = $('#item_' + id + ' .widget')[0];
  return SC.Widget(iframe);
}

function play(id) {
  getWidget(id).play();
  $('#item_' + id + ' .play').hide();
  $('#item_' + id + ' .pause').show();
}

function pause(id) {
  getWidget(id).pause();
  $('#item_' + id + ' .pause').hide();
  $('#item_' + id + ' .play').show();
}

function download(id) {
  getWidget(id).getCurrentSound(function(sound){
    var link = $('#item_' + id + ' .download')[0];
    link.href = sound.download_url + "?client_id=cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ";
    link.click();
  });
}
