function play(id) {
  getWidget(id).play();
  $('#item_' + id + ' .play').hide();
  $('#item_' + id + ' .loader').hide();
  $('#item_' + id + ' .pause').show();
}

function getWidget(id) {
  var iframe = $('#frame_' + id)[0];
  return SC.Widget(iframe);
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
      $(link).removeAttr('onclick');
      $(link).trigger('linkready');
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

function setWidgetSrc(id, url, source) {
  if(source == 'play') {
    $('#item_' + id + ' .play').hide();
    $('#item_' + id + ' .loader').show();
  }

  var iframe = $('#frame_' + id)[0];
  $(iframe).attr('src', 'https://w.soundcloud.com/player/?url=' + url);

  $(iframe).ready(function() {
    var widget = SC.Widget(iframe);
    bindWidgetEventsHandlers(id, widget, source);
  });
}

function setPlayHandler(id, playerDiv) {
  return function() {
    playerDiv.find('.play').attr('onclick', 'play(' + id + ')');
  };
}

function bindWidgetEventsHandlers(id, widget, source) {
  var playerDiv = $('#item_' + id);

  if(source == 'play') {
    widget.bind(SC.Widget.Events.READY, function(){ play(id); });
  } else if(source == 'download') {
    var downloadLink = playerDiv.find('.download')[0];
    $(downloadLink).on('linkready', function(){ downloadLink.click(); });
  }

  widget.bind(SC.Widget.Events.READY, setDownloadLink(widget, playerDiv));
  widget.bind(SC.Widget.Events.READY, setProgressBarHandler(widget, playerDiv));
  widget.bind(SC.Widget.Events.READY, setDurationCount(widget, playerDiv));
  widget.bind(SC.Widget.Events.READY, setPlayHandler(id, playerDiv));
  widget.bind(SC.Widget.Events.FINISH, setResetPlayerHandler(playerDiv));
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, setUpdateProgressHandler(playerDiv));
}
