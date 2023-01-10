/*
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
*/

const superbowlWin = (recordObj) => {
  const winner = recordObj.find((win) => win.result.toUpperCase() === "W");
  if (winner) {
    return winner.year;
  } else {
    return undefined;
  }
};
