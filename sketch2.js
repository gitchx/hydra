
const url = 'https://raw.githubusercontent.com/gitchx/hydra/refs/heads/main/images/TS9_2.jpeg'

const img = new Image()
img.crossOrigin = 'anonymous'

img.onload = () => {
  const imageRatio = img.naturalWidth / img.naturalHeight

  s0.initImage(url)

  src(s0)
    .scale(
      1,
      () => Math.min(1, imageRatio / (width / height)),
      () => Math.min(1, (width / height) / imageRatio)
    )
    .blend(
      osc(1, 1, 1).rotate(Math.PI / 4),
      0.5
    )
    .out()
}

img.src = url
