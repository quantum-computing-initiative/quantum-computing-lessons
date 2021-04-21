# lessons
> Quantum Computing Initiative lesson information

## Get Started
In any particular lesson directory, run the following to start the
[reveal.js](https://revealjs.com/) slides. Then visit
[http://localhost:3000](http://localhost:3000).

```sh
yarn
yarn dev
```

## Animations
Animations are done using [Manim](https://github.com/3b1b/manim) in Docker. Run
the following to render animations within Docker.
```
docker run --rm -it  --user="$(id -u):$(id -g)" -v "$(pwd)":/manim manimcommunity/manim manim my_file.py QuantumAnimation -qm
```
