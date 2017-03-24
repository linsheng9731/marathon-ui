import config from "./config";

var configDev = Object.assign(config, {
  // Defines the Marathon API URL,
  // leave empty to use the same as the UI is served.
  apiURL: "http://cnmt0:8080/",
  // If the UI is served through a proxied URL, this can be set here.
  rootUrl: ""
});
export default configDev;
