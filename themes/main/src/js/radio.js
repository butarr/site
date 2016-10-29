function getWidget(id) {
  var iframe = $('#item_' + id + ' .widget')[0];
  return SC.Widget(iframe);
}

function handleProgressBarClick(widget) {
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

function setDurationCount(widget, playerDiv) {
  return function() {
    widget.getDuration(function(duration) {
      var durationMinutes = parseInt((duration / 60000).toString());
      var durationSeconds = parseInt(((duration % 60000) / 1000).toString());

      var totalDuration = durationMinutes + ':' + durationSeconds;
      var durationCount = playerDiv.find('.duration');
      durationCount.totalDuration = totalDuration;
      durationCount.text('0:00 / ' + totalDuration);
    });
  }
}

function setup() {
  $('.player').each(function(index) {
    var playerDiv = $(this);
    var widget = SC.Widget(playerDiv.find('.widget')[0]);

    widget.bind(SC.Widget.Events.READY, setDownloadLink(widget, playerDiv));
    widget.bind(SC.Widget.Events.READY, setProgressBarHandler(widget, playerDiv));
    widget.bind(SC.Widget.Events.READY, setDurationCount(widget, playerDiv));
  });
};

$(document).ready(setup);
