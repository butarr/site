function play(id, audioUrl) {
  setSource(id, audioUrl);
  var widget = getWidget(id);
  setup(widget, id);
  widget.bind(SC.Widget.Events.READY, function() { widget.play(); });
  $('#item_' + id + ' .play').hide();
  $('#item_' + id + ' .pause').show();
}

function getWidget(id, audioUrl) {
  var iframe = $('#frame_' + id)[0];
  return SC.Widget(iframe);
}

function setSource(id, audioUrl) {
  var iframe = $('#frame_' + id)[0];
  if($(iframe).attr('src') == ''){
    $(iframe).attr('src', 'https://w.soundcloud.com/player/?url=' + audioUrl);
  }
}

function pause(id) {
  getWidget(id).pause();
  $('#item_' + id + ' .pause').hide();
  $('#item_' + id + ' .play').show();
}

function handleProgressBarClick(widget) {
  return function(e) {
    widget.getDuration(function(duration) {
      var offsetX = e.pageX - $(e.target).offset().left;
      var offset = offsetX / e.target.offsetWidth;
      widget.seekTo(duration * offset);
    });
  };
}

function setUpdateProgressHandler(playerDiv) {
  var progressBar = playerDiv.find('progress')[0];
  var timeProgress = playerDiv.find('.timeProgress');

  return function(sound) {
    progressBar.value = sound.relativePosition * 100;
    timeProgress.text(toMinutesAndSeconds(sound.currentPosition));
  };
}

function setDownloadLink(widget, playerDiv) {
  return function() {
    widget.getCurrentSound(function(sound) {
      var link = playerDiv.find('.download')[0];
      link.href = sound.download_url + "?client_id=cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ";
    });
  };
}

function setProgressBarHandler(widget, playerDiv) {
  return function() {
    var progressBar = playerDiv.find('progress')[0];
    progressBar.addEventListener('click', handleProgressBarClick(widget));
  }
}

function toMinutesAndSeconds(durationMilliseconds) {
  var durationMinutes = parseInt((durationMilliseconds / 60000).toString());
  var durationSeconds = parseInt(((durationMilliseconds % 60000) / 1000).toString());
  durationSeconds = (durationSeconds < 10) ? '0' + durationSeconds : durationSeconds;

  return durationMinutes + ':' + durationSeconds;
}

function setDurationCount(widget, playerDiv) {
  return function() {
    widget.getDuration(function(duration) {
      var durationCount = playerDiv.find('.duration');
      durationCount.text(toMinutesAndSeconds(duration));
    });
  }
}

function setResetPlayerHandler(playerDiv) {
  return function() {
    playerDiv.find('.pause').hide();
    playerDiv.find('.play').show();
  }
}

function setup(widget, id) {
  var playerDiv = $('#item_' + id);
  widget.bind(SC.Widget.Events.READY, setDownloadLink(widget, playerDiv));
  widget.bind(SC.Widget.Events.READY, setProgressBarHandler(widget, playerDiv));
  widget.bind(SC.Widget.Events.READY, setDurationCount(widget, playerDiv));
  widget.bind(SC.Widget.Events.FINISH, setResetPlayerHandler(playerDiv));
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, setUpdateProgressHandler(playerDiv));
};
