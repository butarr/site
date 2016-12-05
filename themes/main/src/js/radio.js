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

function play(id) {
  document.getElementById('audio_' + id).play();
  $('#item_' + id + ' .play').hide();
  $('#item_' + id + ' .pause').show();
}

function pause(id) {
  document.getElementById('audio_' + id).pause();
  $('#item_' + id + ' .pause').hide();
  $('#item_' + id + ' .play').show();
}

function showPlayButton(id){
  $('#item_' + id + ' .loader').hide();
  $('#play_' + id).show();
}

function highlightsPageOnFocus(){
  if(document.URL.indexOf("radioagencia") != -1){
    var menu = $('a[href="/radioagencia/"]');
    menu.closest('li').css({"background-color": "rgba(177,32,40,1)"});
  }
}

function setup(){
  highlightsPageOnFocus();
  var clientId = 'cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ';

  // Initializes SounCloud SDK
  SC.initialize({
    client_id: clientId
  });

  $('.audio-item').each(function(index) {
    var audioElement = $(this).find('.audio')[0];
    var download = $(this).find('.download')[0];
    var duration = $(this).find('.duration');
    var trackUrl = audioElement.src;

    var getStreamUrl = function (track) {
      audioElement.src = track.stream_url + '?client_id=' + clientId;
      download.href = track.download_url + '?client_id=' + clientId;
      duration.text(toMinutesAndSeconds(track.duration));
    };

    SC.resolve(trackUrl).then(getStreamUrl);

    audioElement.oncanplay = showPlayButton(index);
  });
}

$(document).ready(setup);
