const cols = 20
const rows = 20

const size = 0.04
const gapX = 0.07
const gapY = 0.045
const delay = 0.2

const blink = (d) =>
  () => 0.5 + 0.5 * Math.sin((time - d) * Math.PI * 2)

const tri = (x, y, d) =>
  shape(3, size, 0)
    .rotate(Math.PI / 3)
    .scale(1, 1, 0.6)
    .scrollX(x)
    .scrollY(y)
    .mult(
      solid(1, 1, 1)
        .brightness(() => blink(d)() - 1)
    )

let output = solid(0, 0, 0, 0)

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    output = output.add(
      tri(
        (x - (cols - 1) / 2) * gapX,
        (y - (rows - 1) / 2) * gapY,
        (x + y)* delay
      )
    )
  }
}

output.out(o0)
render(o0)