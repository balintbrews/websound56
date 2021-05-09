import { SVG } from '@svgdotjs/svg.js';
import Rulez from 'rulez.js';
import * as config from './config.json';
import getScrollPositionPercentage from './scroll-position';
import getCurrentVolume from './volume';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    createLineChartContainer();
    const markers = createLineCharts();
    createRuler();
    update(markers);

    document.addEventListener(
      'scroll',
      () => {
        update(markers);
      },
      markers
    );
  },
  config
);

function update(markers) {
  const position = getScrollPositionPercentage(8000);
  const volumes = getCurrentVolume(position);
  updateScrollPositionPercentage(position);
  updateMarkers(markers, position, volumes);
}

function createLineChartContainer() {
  const div = document.createElement('div');
  div.id = 'line-chart';
  div.style.position = 'fixed';
  document.body.appendChild(div);
  const infoDiv = document.createElement('div');
  infoDiv.id = 'info';
  infoDiv.style.width = '50%';
  infoDiv.style.margin = '15px auto 0 auto';
  infoDiv.style.padding = '10px';
  document.getElementById('line-chart').appendChild(infoDiv);
}

function createLineCharts() {
  const markers = [];
  config.forEach((loop, index) => {
    const div = document.createElement('div');
    div.id = `loop-${index}`;
    div.style.width = '50%';
    div.style.margin = '25px auto 25px auto';
    div.style.padding = '10px';
    div.style.backgroundColor = '#efefef';
    document.getElementById('line-chart').appendChild(div);
    const draw = SVG().addTo(`#${div.id}`).size(1000, 100);
    draw.viewbox(0, 0, 1000, 100);
    draw.css({ width: '100%', height: 'auto' });
    draw
      .polyline(
        loop.segments.map(segment => [
          segment.position * 10,
          100 - segment.volume,
        ])
      )
      .fill('none')
      .stroke({ color: '#bbb', width: 4, linecap: 'round', linejoin: 'round' });
    const marker = draw.circle(20).fill('#f06');
    markers.push(marker);
  });
  return markers;
}

function updateMarkers(markers, position, volumes) {
  markers.forEach((marker, index) => {
    marker.move(position * 10 - 10, 100 - volumes[index] - 10);
  });
}

function createRuler() {
  document.body.style.margin = 0;
  SVG().addTo('body').size(100, 8000).attr('id', 'ruler');
  new Rulez({
    element: document.getElementById('ruler'),
    layout: 'vertical',
  }).render();
}

function updateScrollPositionPercentage(percentage) {
  document.getElementById('info').innerHTML = `Scroll position: ${Math.round(
    percentage
  )}%`;
}
