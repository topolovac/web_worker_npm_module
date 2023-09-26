self.onmessage = function (event) {
  console.log("worker.js: onmessage", event);
  const data = event.data;
  const result = data;
  self.postMessage(result);
};
