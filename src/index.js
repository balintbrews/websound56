import {Howl} from 'howler';

const sound = new Howl({
  src: ['assets/loop-1-v1.mp3'],
  loop: true,
});

sound.play();