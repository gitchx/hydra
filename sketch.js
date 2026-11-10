const hydraSynth = new Hydra({
  canvas: document.querySelector('#hydra-canvas'),
  width: 1000,
  height: 1000,
  detectAudio: false,
})

hydraSynth.setResolution(1000, 1000)

s0.initImage('/images/TS9.jpeg')

src(s0)
  .blend(osc(1, 1, 1), 0.5)
  .out()
