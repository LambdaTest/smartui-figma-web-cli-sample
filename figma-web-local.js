const { Builder, By, Key, until } = require("selenium-webdriver");
const { smartuiSnapshot } = require("@lambdatest/selenium-driver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // await driver.get("https://www.lambdatest.com/");
    // await smartuiSnapshot(driver, "LambdaTest-Figma.png");

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

    //     // vaneck
        // await driver.get("https://www.vaneck.com/us/en/");
        // await smartuiSnapshot(driver, `"{~!@#$%^&*(,./<>?:';;'[""""]\|)_+=-":;;'"÷`);

    // await driver.get("https://www.vaneck.com/us/en/investments/durable-high-dividend-etf-dura/performance/");
    // await smartuiSnapshot(driver, "screenshot-performance");

    // await driver.get("https://www.vaneck.com/us/en/investments/biotech-etf-bbh/overview/");
    // await smartuiSnapshot(driver, "screenshot-overview");

    // await driver.get("https://www.vaneck.com/us/en/investments/energy-income-etf-einc/overview/");
    // await smartuiSnapshot(driver, "energy-income-etf-einc");

    // await driver.get("https://www.vaneck.com/us/en/investments/brazil-small-cap-etf-brf/overview/");
    // await smartuiSnapshot(driver, "brazil-small-cap-etf-brf");

    // await driver.get("https://www.vaneck.com/us/en/resources/tax-information/");
    // await smartuiSnapshot(driver, "screenshot-tax-information");

    // await driver.get("https://www.vaneck.com/us/en/education/education-center/");
    // await smartuiSnapshot(driver, "screenshot-education-center");

    // await driver.get("https://www.vaneck.com/us/en/education/investment-ideas/income-ideas/");
    // await smartuiSnapshot(driver, "screenshot-income-ideas");

    // await driver.get("https://www.vaneck.com/us/en/insights/digital-assets/");
    // await smartuiSnapshot(driver, "screenshot-digital-assets");

    // await driver.get("https://www.vaneck.com/us/en/insights/model-portfolios/?p=1");
    // await smartuiSnapshot(driver, "{~!@#$%^&*(,./<>?:';;'[12]\|)_+=-`:");

    // await driver.get("https://www.vaneck.com/us/en/insights/topics/?tag=BITCOIN&p=1");
    // await smartuiSnapshot(driver, "{~!@#$%^&*(,./<>?:';;'[abc]\|)_+=-`:");

    // await driver.get("https://www.vaneck.com/us/en/news-and-insights/thought-leaders/imaru-casanova/");
    // await smartuiSnapshot(driver, "screenshot-imaru-casanova");

    // await driver.get("https://www.vaneck.com/us/en/our-firm/leadership/");
    // await smartuiSnapshot(driver, "screenshot-leadership");

    // await driver.get("https://www.vaneck.com/us/en/our-firm/vaneck-apparel/");
    // await smartuiSnapshot(driver, "screenshot-vaneck-apparel");

    // await driver.get("https://www.vaneck.com/us/en/insights/investment-outlook/?p=1");
    // await smartuiSnapshot(driver, "screenshot-investment-outlook");

  } finally {
    await driver.quit();
  }
})();