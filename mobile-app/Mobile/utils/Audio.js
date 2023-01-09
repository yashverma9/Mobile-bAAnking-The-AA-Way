import Sound from 'react-native-sound';
var audio = new Sound(
  'https://alloblue-audios.s3.us-west-2.amazonaws.com/alloblue-ringtone.mp3',
  null,
  error => {
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
    audio.setNumberOfLoops(-1);
  },
);

const playAudio = () => {
  audio.play(success => {
    if (success) {
      playAudio();
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
};

const playAudioSixtySec = () => {
  // setInterval(greet, 1000);
  console.warn('playAudioSixtySec');
  audio.play(success => {
    if (success) {
      playAudio();
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
};

function greet() {
  // pauseAudio();
  console.warn('Hello From Audio.js');
}

const pauseAudio = () => {
  audio.pause();
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

export {playAudio, pauseAudio, playPause, playAudioSixtySec};
