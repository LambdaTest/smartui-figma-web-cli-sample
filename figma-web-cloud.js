const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

// username: Username can be found at automation dashboard
const USERNAME = process.env.LT_USERNAME || "<USERNAME>";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "<ACCESS_KEY>";
let capabilities = {
  platform: "catalina",
  browserName: "chrome",
  version: "latest",
  "LT:Options": {
    username: USERNAME,
    accessKey: KEY,
    project: "<PROJECT_NAME>",
    w3c: true,
    name: "SmartUI Web", // name of the test
    build: "SmartUI Figma Sample", // name of the build
    visual: true,
  },
};

(async function example() {
  // Setup Input capabilities
  var gridUrl =
    "https://" + USERNAME + ":" + KEY + "@hub.lambdatest.com/wd/hub";

  let driver = await new Builder()
    .usingServer(gridUrl)
    .withCapabilities(capabilities)
    .build();
  driver.manage().window().fullscreen();
  try {
    

    // Viewport: 1728x2227 px
    let ss1options =
        {
            "web": {
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari",
                    "edge"
                ],
                "viewports": [[ 1728,2227]], //required resized dom viewport
            }
        };
    await driver.get("http://avexaero.com/");
    await new Promise(r => setTimeout(r, 15000));
    await smartuiSnapshot(driver, "Landing.png",ss1options);

    // Viewport: 1728x2539 px
    let ss2options =
        {
            "web": {
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari",
                    "edge"
                ],
                "viewports": [[1728,2539]], //required resized dom viewport
            }
        };
    await driver.get("http://avexaero.com/services/elementor-123/");
    await new Promise(r => setTimeout(r, 15000));
    await smartuiSnapshot(driver, "Catering.png",ss2options);

    // Viewport: 1728x2508 px
    let ss3options =
    {
        "web": {
            "browsers": [
                "chrome",
                "firefox",
                "safari",
                "edge"
            ],
            "viewports": [[1728,2508]], //required resized dom viewport
        }
    };
    await driver.get("http://avexaero.com/services/flight-planning/");
    await new Promise(r => setTimeout(r, 15000));
    await smartuiSnapshot(driver, "Flight-Planning.png",ss3options);

    // Viewport: 1728x2508 px
    let ss4options =
    {
        "web": {
            "browsers": [
                "chrome",
                "firefox",
                "safari",
                "edge"
            ],
            "viewports": [[1728,2508]], //required resized dom viewport
        }
    };
    await driver.get("http://avexaero.com/services/fuel/");
    await new Promise(r => setTimeout(r, 15000));
    await smartuiSnapshot(driver, "Fuel.png",ss4options);

    // Viewport: 1728x3637 px
    let ss5options =
    {
        "web": {
            "browsers": [
                "chrome",
                "firefox",
                "safari",
                "edge"
            ],
            "viewports": [[1728,3637]], //required resized dom viewport
        }
    };
    await driver.get("http://avexaero.com/services/handling/");
    await new Promise(r => setTimeout(r, 15000));
    await smartuiSnapshot(driver, "Handling.png",ss5options);

  
  } finally {
    await driver.quit();
  }
})();