import { Howl } from 'howler';
import * as config from './config.json';
import getScrollPositionPercentage from './scroll-position';
import getCurrentVolume from './volume';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const loops = config.map(loop => {
      const sound = new Howl({
        src: [`${BASE_URL}/${loop.file}`], // eslint-disable-line no-undef
        loop: true,
        volume: 0,
      });
      sound.play();
      return sound;
    });
    update(loops);

    document.addEventListener(
      'scroll',
      () => {
        update(loops);
      },
      loops
    );
  },
  config
);

function update(loops) {
  const position = getScrollPositionPercentage(8000);
  const volumes = getCurrentVolume(position);
  updateVolume(loops, volumes);
}

function updateVolume(loops, volumes) {
  loops.forEach((loop, index) => {
    loop.volume(volumes[index] / 100);
  });
}
