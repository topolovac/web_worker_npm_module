module.exports = function runWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.onmessage = function (event) {
      console.log("index.js: onmessage", event);
      resolve(event.data);
      worker.terminate();
    };
    worker.onerror = function (error) {
      console.error("index.js: onerror", error);
      reject(error);
      worker.terminate();
    };

    console.log("index.js: postMessage", data);
    worker.postMessage(data);
  });
};
