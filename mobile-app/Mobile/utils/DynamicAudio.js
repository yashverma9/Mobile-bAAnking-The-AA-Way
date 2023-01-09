import Sound from 'react-native-sound';

const setAudio = url => {
  var audio = new Sound(url, null, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        audio.getDuration() +
        'number of channels: ' +
        audio.getNumberOfChannels(),
    );
    audio.setNumberOfLoops(0);
  });

  return audio;
};

var obj;
const playAudio = async (audio, resetPlayButtonState) => {
  // alert('first time playAudio');
  obj = audio;
  audio.play(resetPlayButtonState);
};

const pauseAudio = () => {
  console.log(obj);
  obj.pause();
};

const playPausedAudio = resetPlayButtonState => {
  // alert('REPLAY');
  obj.play(resetPlayButtonState);
};

const playPause = () => {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.play(success => {
      if (success) {
        playAudio();
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }
};

export {setAudio, playAudio, pauseAudio, playPause, playPausedAudio};
