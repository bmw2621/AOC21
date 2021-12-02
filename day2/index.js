import { fetchAocInput } from "../utils/fetchAocInput.mjs";

const processData = (data) => {
  const processed = data.split("\n").map((row) => {
    const rowSplit = row.split(" ");
    return {
      dir: rowSplit[0],
      amount: Number(rowSplit[1]),
    };
  });
  return processed.slice(0, processed.length - 1);
};

const determineDestination = (data) => {
  const state = {
    depth: 0,
    hor: 0,
  };
  data.forEach(({ amount, dir }, idx) => {
    switch (dir) {
      case "up":
        state.depth -= amount;
        break;
      case "down":
        state.depth += amount;
        break;
      case "forward":
        state.hor += amount;
        break;
      default:
        throw new Error(`Unknown direction found on line ${idx + 1}`);
    }
  });
  return state.depth * state.hor;
};

const determineWithAim = (data) => {
  let state = {
    depth: 0,
    hor: 0,
    aim: 0,
  };

  data.forEach((reading) => {
    const { amount } = reading;
    switch (reading.dir) {
      case "up":
        state.aim -= amount;
        break;
      case "down":
        state.aim += amount;
        break;
      case "forward":
        state.hor += amount;
        state.depth += amount * state.aim;
        break;
      default:
        throw new Error(`Unknown direction found on line ${idx + 1}`);
    }
  });

  return state.hor * state.depth;
};

fetchAocInput("/2/input")
  .then(processData)
  .then(determineDestination)
  .then((answer) => console.log(`Part 1: ${answer}`));

fetchAocInput("/2/input")
  .then(processData)
  .then(determineWithAim)
  .then((answer) => console.log(`Part 2: ${answer}`));
