const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 2500, yoyo: true }
).start();

const tween2 = KUTE.fromTo(
  '#blob3',
  { path: '#blob3' },
  { path: '#blob4' },
  { repeat: 999, duration: 2500, yoyo: true }
).start();