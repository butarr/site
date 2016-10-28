function getWidget(id) {
  var iframe = $('#item_' + id + ' .widget')[0];
  return SC.Widget(iframe);
}

function handleProgressBarClick(id) {
  var widget = getWidget(id);

  return function(e) {
    widget.getDuration(function(duration) {
      var offset = e.offsetX / e.target.offsetWidth;
      widget.seekTo(duration * offset);
    });
  };
}

function updateProgressBar(id) {
  var progressBar = $('#item_' + id + ' progress')[0];

  return function(sound) {
    progressBar.value = sound.relativePosition * 100;
  };
}

function play(id) {
  var widget = getWidget(id);

  var progressBar = $('#item_' + id + ' progress')[0];
  progressBar.addEventListener('click', handleProgressBarClick(id));

  widget.bind(SC.Widget.Events.PLAY_PROGRESS, updateProgressBar(id));
  widget.play();

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
