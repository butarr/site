function setResetPlayerHandler(playerDiv) {
  return function() {
    playerDiv.find('.pause').hide();
    playerDiv.find('.play').show();
    playerDiv.find('progress')[0].value = 0;
    playerDiv.find('.timeProgress').text('0:00');
  }
}

function handleProgressBarClick(audioElement) {
  return function(e) {
    var offsetX = e.pageX - $(e.target).offset().left;
    var offset = offsetX / e.target.offsetWidth;
    audioElement.currentTime = audioElement.duration * offset;
  };
}

function setProgressBarHandler(audioElement, playerDiv) {
  var progressBar = playerDiv.find('progress')[0];
  progressBar.addEventListener('click', handleProgressBarClick(audioElement));
}

function setUpdateProgressHandler(audioElement, playerDiv) {
  var progressBar = playerDiv.find('progress')[0];
  var timeProgress = playerDiv.find('.timeProgress');

  return function() {
    progressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
    timeProgress.text(toMinutesAndSeconds(audioElement.currentTime * 1000));
  };
}

function toMinutesAndSeconds(durationMilliseconds) {
  var durationMinutes = parseInt((durationMilliseconds / 60000).toString());
  var durationSeconds = parseInt(((durationMilliseconds % 60000) / 1000).toString());
  durationSeconds = (durationSeconds < 10) ? '0' + durationSeconds : durationSeconds;

  return durationMinutes + ':' + durationSeconds;
}

function play(id) {
  $('#audio_' + id)[0].play();
  $('#item_' + id + ' .play').hide();
  $('#item_' + id + ' .pause').show();
}

function pause(id) {
  $('#audio_' + id)[0].pause();
  $('#item_' + id + ' .pause').hide();
  $('#item_' + id + ' .play').show();
}

function showPlayer(id){
  $('#item_' + id + ' .loader').hide();
  $('#item_' + id + ' .player').show();
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
    var trackUrl = $(audioElement).data('soundcloudLink');

    var getStreamUrl = function (track) {
      audioElement.src = track.stream_url + '?client_id=' + clientId;
      download.href = track.download_url + '?client_id=' + clientId;
      duration.text(toMinutesAndSeconds(track.duration));
    };

    SC.resolve(trackUrl).then(getStreamUrl).then(function() {
      audioElement.oncanplay = showPlayer(index);
    });

    audioElement.ontimeupdate = setUpdateProgressHandler(audioElement, $(this));
    audioElement.onended = setResetPlayerHandler($(this));
    setProgressBarHandler(audioElement, $(this));
  });
}

$(document).ready(setup);
