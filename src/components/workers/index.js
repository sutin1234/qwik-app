self.onmessage = (event) => {
  const result = event.data++;
  self.postMessage(result);
};
