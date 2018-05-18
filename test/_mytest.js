// var webdriver = require('selenium-webdriver'),
//
// By = webdriver.By,
// until = webdriver.until,
//     test = require('selenium-webdriver/testing');
//
// describe('Google Search', function () {
//     var driver;
//
//     before (function () {
//         driver = new webdriver.Builder()
//             .forBrowser('chrome')
//             .build();
//     });
//
//     it('should append query to title', function () {
//         driver.get('http://www.google.com');
//         driver.findElement(By.name('q')).sendKeys('webdriver');
//         driver.findElement(By.name('bntG')).click();
//         driver.wait(until.titleIs('webdriver - Google Search'), 5000);
//     });
//
//     after(function () {
//         driver.quit();
//     });
// });


const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    } finally {
        await driver.quit();
    }
})();