import { fetchAocInput } from "../utils/fetchAocInput.mjs";

const processData = (data) => data.split("\n").map(Number);

const countIncreases = (data) =>
  data.reduce(
    (acc, val, idx) => {
      if (idx > 0 && val > acc.prev) return { prev: val, count: acc.count + 1 };
      return { ...acc, prev: val };
    },
    { prev: null, count: 0 }
  );

const averageSonarReadings = (data) => {
  const windows = [];
  for (let i = 0; i < data.length - 2; i++) {
    windows.push(data[i] + data[i + 1] + data[i + 2]);
  }
  return countIncreases(windows);
};

fetchAocInput("/1/input")
  .then(processData)
  .then(countIncreases)
  .then((data) => console.log(`Part 1: ${data.count}`));

fetchAocInput("/1/input")
  .then(processData)
  .then(averageSonarReadings)
  .then((data) => console.log(`Part 2: ${data.count}`));
