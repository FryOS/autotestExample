const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function myTest() {
	const driver = new webdriver.Builder().forBrowser('chrome').build();
	try {
		await driver.get('https://profittest.akbars.ru/');
		await driver.wait(until.elementLocated({
			xpath: '//*[@id="app"]/div/div[2]/div/div[3]/div/div/div/div/div[1]/div[2]/div/div[1]/a'}), 5000);
		await driver.sleep(3000);
		await driver.findElement({
			xpath: '//*[@id="app"]/div/div[2]/div/div[3]/div/div/div/div/div[1]/div[2]/div/div[1]/a'}
		).click();
		await driver.sleep(3000);
		

	} finally {
		await driver.quit();
	}
})();


// 

