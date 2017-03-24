import packageJSON from "../../../package.json";

var config = {
  // @@ENV gets replaced by build system
  environment: "@@ENV",
  // If the UI is served through a proxied URL, this can be set here.
  rootUrl: "",
  // Defines the Marathon API URL,
  // leave empty to use the same as the UI is served.
  // Intervall of API request in ms
  apiURL: "http://10.0.1.237:8080/",
  updateInterval: 5000,
  // Local http server URI while tests run
  localTestserverURI: {
    address: "localhost",
    port: 8181
  },
  version: ("@@TEAMCITY_UI_VERSION".indexOf("@@TEAMCITY") === -1) ?
    "@@TEAMCITY_UI_VERSION" :
    `${packageJSON.version}-SNAPSHOT`
};

export default config;
