const trailer = document.querySelector('#film');
const walkthrough = document.querySelector('#gameplay');
const errorMessage = document.querySelector('.playback-error');
const chapterPicker = document.querySelector('.chapter-picker');
const chapterSelect = chapterPicker.querySelector('select');
const streamUrl = walkthrough.querySelector('source').src;
let streamPlayer;
let nativeStream = false;
let requestedTime = null;

function playVideo(video) {
  video.controls = true;
  video.play().catch(() => {
    video.controls = true;
    video.closest('.screen').querySelector('.watch').hidden = false;
  });
}

function showPlaybackError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  walkthrough.closest('.screen').querySelector('.watch').hidden = false;
}

function seekWhenReady() {
  if (requestedTime !== null && walkthrough.readyState >= 1 && Number.isFinite(walkthrough.duration)) {
    walkthrough.currentTime = requestedTime;
    requestedTime = null;
  }
}

function startWalkthrough(time) {
  if (typeof time === 'number') requestedTime = time;
  errorMessage.hidden = true;
  if (streamPlayer || nativeStream) {
    seekWhenReady();
    playVideo(walkthrough);
    return;
  }
  const nativeSupport = walkthrough.canPlayType('application/vnd.apple.mpegurl');
  if (window.Hls?.isSupported() && !(nativeSupport && 'ManagedMediaSource' in window)) {
    streamPlayer = new Hls({ startPosition: requestedTime ?? -1, maxBufferLength: 24, backBufferLength: 24 });
    streamPlayer.on(Hls.Events.MANIFEST_PARSED, () => playVideo(walkthrough));
    streamPlayer.on(Hls.Events.ERROR, (_, data) => {
      if (!data.fatal) return;
      streamPlayer.destroy();
      streamPlayer = null;
      showPlaybackError('视频加载中断，可点击播放重试。');
    });
    streamPlayer.loadSource(streamUrl);
    streamPlayer.attachMedia(walkthrough);
  } else if (nativeSupport) {
    nativeStream = true;
    walkthrough.src = streamUrl;
    playVideo(walkthrough);
  } else {
    showPlaybackError('当前浏览器无法播放这段视频，请用新版浏览器打开。');
  }
}

for (const video of [trailer, walkthrough]) {
  const button = video.closest('.screen').querySelector('.watch');
  button.hidden = false;
  video.controls = false;
  button.addEventListener('click', () => {
    if (video === walkthrough) startWalkthrough();
    else playVideo(video);
  });
  video.addEventListener('play', () => {
    (video === trailer ? walkthrough : trailer).pause();
    button.hidden = true;
    video.focus({ preventScroll: true });
  });
  video.addEventListener('ended', () => {
    video.controls = false;
    button.hidden = false;
  });
}
walkthrough.addEventListener('loadedmetadata', seekWhenReady);
walkthrough.addEventListener('durationchange', seekWhenReady);
walkthrough.addEventListener('error', () => {
  if (!nativeStream) return;
  nativeStream = false;
  showPlaybackError('视频加载中断，可点击播放重试。');
});

const trackElement = walkthrough.querySelector('track');
const chapters = trackElement.track;
function showChapters() {
  if (!chapters.cues?.length) return;
  const options = Array.from(chapters.cues, cue => {
    const seconds = Math.floor(cue.startTime);
    const stamp = Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
    return new Option(stamp + '　' + cue.text, String(cue.startTime));
  });
  chapterSelect.replaceChildren(...options);
  chapterPicker.hidden = false;
}
trackElement.addEventListener('load', showChapters);
chapters.mode = 'hidden';
showChapters();
chapterSelect.addEventListener('change', () => startWalkthrough(Number(chapterSelect.value)));
chapters.addEventListener('cuechange', () => {
  const cue = chapters.activeCues?.[0];
  if (cue && requestedTime === null) chapterSelect.value = String(cue.startTime);
});
