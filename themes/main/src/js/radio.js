function setResetPlayerHandler(playerDiv) {
  return function() {
    playerDiv.find('progress')[0].value = 0;
    playerDiv.find('.time-progress').text('0:00');
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
  var timeProgress = playerDiv.find('.time-progress');

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

var currentPlayingId;

function play(id) {
  if(currentPlayingId >= 0) {
    pause(currentPlayingId);
  }

  $('#audio_' + id)[0].play();
  currentPlayingId = id;
}

function pause(id) {
  $('#audio_' + id)[0].pause();
}

function playRadio() {
  $('#audio_radio')[0].play();
}

function pauseRadio() {
  $('#audio_radio')[0].pause();
}

function showPlayer(playerDiv){
  playerDiv.find('.loader').hide();
  playerDiv.find('.player').show();
}

function highlightsPageOnFocus(){
  if(document.URL.indexOf("radioagencia") != -1){
    var menu = $('a[href="/radioagencia/"]');
    menu.closest('li').css({"background-color": "rgba(177,32,40,1)"});
  }
}

function showServicesOnMobile() {
  $('#sidebar-mobile').insertAfter($('#news_2'));

  if ($('#sidebar-mobile').css('display') == 'block'){
    $('#news_2').css('border-bottom','0');
  }
}

function showPlay(playerDiv) {
  playerDiv.find('.controls .play').show();
  playerDiv.find('.controls .pause').hide();
  playerDiv.find('.controls .loader').hide();
}

function showPause(playerDiv) {
  playerDiv.find('.controls .pause').show();
  playerDiv.find('.controls .loader').hide();
  playerDiv.find('.controls .play').hide();
}

function showTrackLoader(playerDiv) {
  playerDiv.find('.controls .loader').show();
  playerDiv.find('.controls .pause').hide();
  playerDiv.find('.controls .play').hide();
}

function showRadioweb(){
  showPlayer($($('.radio-player')[0]));
}

function setup(){
  highlightsPageOnFocus();
  showServicesOnMobile();

  var clientId = 'cUa40O3Jg3Emvp6Tv4U6ymYYO50NUGpJ';

  // Initializes SounCloud SDK
  SC.initialize({ client_id: clientId });

  $('.audio-item').each(function(index) {
    var playerDiv = $(this);
    var audioElement = playerDiv.find('.audio')[0];
    var download = playerDiv.find('.download')[0];
    var duration = playerDiv.find('.duration');
    var trackUrl = $(audioElement).data('soundcloudLink');

    var setupAudioTag = function (track) {
      audioElement.src = track.stream_url + '?client_id=' + clientId;
      download.href = track.download_url + '?client_id=' + clientId;
      duration.text(toMinutesAndSeconds(track.duration));
      showPlayer(playerDiv);
    };

    SC.resolve(trackUrl).then(setupAudioTag);

    audioElement.ontimeupdate = setUpdateProgressHandler(audioElement, playerDiv);
    audioElement.onended = setResetPlayerHandler(playerDiv);
    audioElement.onpause = function() { showPlay(playerDiv); };
    audioElement.onplaying = function() { showPause(playerDiv); };
    audioElement.onwaiting = function() { showTrackLoader(playerDiv) };
    setProgressBarHandler(audioElement, playerDiv);
  });

  showRadioweb();
}

$(document).ready(setup);
