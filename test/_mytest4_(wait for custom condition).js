// const webdriver = require('selenium-webdriver');
const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');

(async function myTest() {
	const driver = new webdriver.Builder().forBrowser('chrome').build();	
	try {
		await driver.get('http://library-app.firebaseapp.com');
		const submitBtn = await driver.findElement({css: '.btn-lg'});
		await driver.findElement(By.css('input')).sendKeys('user');

		// await driver.wait( () => {
		// 	return submitBtn.isEnabled();
		// }, 15000);

		await driver.wait( () => {
			return submitBtn.getCssValue('opacyty').then( result => {
					return result === '1';
			});
		}, 15000)
		 
		submitBtn.click;

		await driver.wait(until.elementsLocated({css: '.alert-success'}), 10000); 

		await driver.findElement({css: '.alert-success'}).getText()
			.then( resolve => {
			console.log(`Это ответ: ${resolve} `);
		},
			err => {
				console.log(` Это ошибка: ${err}`);
			});	
		await driver.sleep(3000); // так делать не нужно
		
	} finally {
		await driver.quit();
	}
})();
