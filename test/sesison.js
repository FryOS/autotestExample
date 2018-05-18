var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('google');
driver.findElement({name: 'q'}).sendKeys(webdriver.Key.ENTER);
// driver.wait(webdriver.until.elementLocated({
// 	xpath: '//*[@id="rso"]/div[3]/div/div[2]/div/div/h3/a'
// }), 5000);
driver.findElement({xpath: '//*[@id="rso"]/div[3]/div/div[2]/div/div/h3/a'}).click();
driver.getTitle().then(function(title) {
	console.log(title)
});
driver.quit()
