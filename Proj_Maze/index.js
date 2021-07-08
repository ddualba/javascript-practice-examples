const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsHoriz = 14;
const cellsVert = 10;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHoriz;
const unitLengthY = height / cellsVert;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];

World.add(world, walls);
// Maze generation

const shuffle = arr => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const grid = Array(cellsVert)
  .fill(null)
  .map(() => Array(cellsHoriz).fill(false));

const verticals = Array(cellsVert)
  .fill(null)
  .map(() => Array(cellsHoriz - 1).fill(false));

const horizontals = Array(cellsVert - 1)
  .fill(null)
  .map(() => Array(cellsHoriz).fill(false));

const startRow = Math.floor(Math.random() * cellsVert);
const startColumn = Math.floor(Math.random() * cellsHoriz);

const stepThroughCell = (row, column) => {
  // if I have visted the cell at [row, col] then return
  if (grid[row][column]) {
    return;
  }

  // Mark this cell as being visited (update Grid array)
  grid[row][column] = true;

  // asseble randomly-ordered list of neighbors, use created randomizer function
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left']
  ]);

  // For each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // Check if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVert ||
      nextColumn < 0 ||
      nextColumn >= cellsHoriz
    ) {
      continue;
    }

    // Check if we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // Remove a wall from either horizontals or verticals array
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }

    stepThroughCell(nextRow, nextColumn);
  }

  // Visit that next cell
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIdx) => {
  row.forEach((open, colIdx) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      colIdx * unitLengthX + unitLengthX / 2,
      rowIdx * unitLengthY + unitLengthY,
      unitLengthX,
      10,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    );

    World.add(world, wall);
  });
});

verticals.forEach((row, rowIdx) => {
  row.forEach((open, colIdx) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      colIdx * unitLengthX + unitLengthX,
      rowIdx * unitLengthY + unitLengthY / 2,
      10,
      unitLengthY,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    );

    World.add(world, wall);
  });
});

// Goal
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    label: 'goal',
    isStatic: true,
    render: {
      fillStyle: 'green'
    }
  }
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: 'ball',
  render: {
    fillStyle: 'blue'
  }
});
World.add(world, ball);

document.addEventListener('keydown', event => {
  const { x, y } = ball.velocity;
  if (event.code === 'KeyW') {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.code === 'KeyD') {
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (event.code === 'KeyS') {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.code === 'KeyA') {
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

// Win Condition
Events.on(engine, 'collisionStart', event => {
  event.pairs.forEach(collision => {
    const labels = ['ball', 'goal'];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector('.winner').classList.remove('hidden');
      world.gravity.y = 1;
      world.bodies.forEach(body => {
        if (body.label === 'wall') {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
