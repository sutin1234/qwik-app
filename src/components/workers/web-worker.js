const range = (size = 100, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

self.onmessage = () => {
  let data = [];
  for (const i in range(200, 1)) {
    data.push({
      index: i,
      firstName: "Sutin",
      lastName: "Injitt",
      age: "30",
      sex: "Male",
      tall: "165",
    });
    console.log("web worker push " + Number(i + 1));
  }
  self.postMessage(data);
};
