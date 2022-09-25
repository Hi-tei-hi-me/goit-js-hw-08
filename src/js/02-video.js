'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
}

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));
