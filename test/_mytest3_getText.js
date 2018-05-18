const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function myTest() {
	const driver = new webdriver.Builder().forBrowser('chrome').build();	
	try {
		await driver.get('http://library-app.firebaseapp.com');
		await driver.findElement(By.css('input'));
		await driver.findElements({css: 'nav li'}).then((elems) => {
			elems.map((el) => {
					el.getText().then( (text) => {console.log(`the text on nav bar + ${text}`)
				})
			})
		})
		
		await driver.sleep(3000); // так делать не нужно
		
	} finally {
		await driver.quit();
	}
})();
