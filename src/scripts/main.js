'use strict';

const list = document.querySelector('.opinions__opinion-box');
const prev = document.querySelector('.opinions__slider-button--prev');
const next = document.querySelector('.opinions__slider-button--next');

let position = 0;

function move(shift) {
  const count = list.children.length;

  position += shift;
  position = Math.abs(position) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});
