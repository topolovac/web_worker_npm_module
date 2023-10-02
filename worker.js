importScripts(
  "https://cdn.jsdelivr.net/npm/web_worker_npm_module@latest/imported_script.js"
);

self.onmessage = function (event) {
  console.log("worker.js: onmessage", event);
  const data = event.data;
  const result = data;
  result.example_var = example_var;
  self.postMessage(result);
};
