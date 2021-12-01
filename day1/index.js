import { fetchAocInput } from "../utils/fetchAocInput.mjs";

const processData1 = (data) =>
  data.reduce(
    (acc, val, idx) => {
      if (idx > 0 && val > acc.prev) return { prev: val, count: acc.count + 1 };
      return { ...acc, prev: val };
    },
    { prev: null, count: 0 }
  );

const processData2 = (data) => {
  const windows = [];
  for (let i = 0; i < data.length - 2; i++) {
    windows.push(data[i] + data[i + 1] + data[i + 2]);
  }
  return processData1(windows);
};

fetchAocInput("/1/input")
  .then(processData1)
  .then((data) => console.log(`Part 1: ${data.count}`));

fetchAocInput("/1/input")
  .then(processData2)
  .then((data) => console.log(`Part 2: ${data.count}`));
