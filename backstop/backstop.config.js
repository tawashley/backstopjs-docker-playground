module.exports = {
  id: "backstop_js_example",
  viewports: require('./config/backstop.viewports'),
  onBeforeScript: "onBefore.js",
  onReadyScript: "onReady.js",
  scenarios: require('./config/backstop.scenarios'),
  paths: require('./config/backstop.paths'),
  report: ["browser", "ci"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}
