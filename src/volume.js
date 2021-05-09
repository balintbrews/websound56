import lineq from 'lineq';
import * as config from './config.json';

const getCurrentVolume = position =>
  config.map(loop => {
    // Find the segment of which we need to apply the volume.
    // Note: we assume that segments are in ascendant order and don't overlap.
    for (let i = 0; i < loop.segments.length; i += 1) {
      if (
        loop.segments[i].position <= position &&
        position < loop.segments[i + 1].position
      ) {
        // We can consider two segments as a graph of a linear equation. The
        // line they define can be described in a slope-intercept form which
        // helps us get the Y-value for the correspinding X-value. In our case
        // X is the scrolling percentage that this function receives.
        // @see https://en.wikipedia.org/wiki/Linear_equation.
        const line = lineq(
          [loop.segments[i].position, loop.segments[i].volume],
          [loop.segments[i + 1].position, loop.segments[i + 1].volume]
        );
        return line.getY(position);
      }
    }
    return 0;
  });

export default getCurrentVolume;
