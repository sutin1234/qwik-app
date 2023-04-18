const range = (size = 100, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

self.onmessage = (msg) => {
  const numRows = msg.data.numRows;
  let data = [];
  for (const i in range(numRows, 1)) {
    data.push({
      index: i + 1,
      firstName: "Sutin",
      lastName: "Injitt",
      age: "30",
      sex: "Male",
      tall: "165",
    });
    console.log("web worker push " + Number(i + 1) + " rows");
  }
  self.postMessage(data);
};
