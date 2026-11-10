const hydraSynth = new Hydra({
  canvas: document.querySelector('#hydra-canvas'),
  width: 1000,
  height: 1000,
  detectAudio: false,
})

hydraSynth.setResolution(1000, 1000)

s0.initImage('https://raw.githubusercontent.com/gitchx/hydra/refs/heads/main/images/TS9_2.jpeg')

src(s0)
  .blend(
	   osc(1, 1, 1).rotate(Math.PI / 4),
		 0.5
	)
  .out()