const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function myTest() {
	const driver = new webdriver.Builder().forBrowser('chrome').build();	
	try {
		await driver.get('http://library-app.firebaseapp.com');
		await driver.findElement(By.css('input')).sendKeys('user@gmail.com');
		await driver.findElement(By.css('.btn-lg')).click();
		
		await driver.wait(until.elementsLocated({css: '.alert-success'}), 10000); // Ждем Элемент, покгда он появится, берем его текст

		await driver.findElement({css: '.alert-success'}).getText()
			.then( resolve => {
			console.log(`${resolve} Это ответ: `);
		},
			err => {
				console.log(`${err} Это ошибка: `);
			});

		await driver.sleep(3000); // так делать не нужно
		
	} finally {
		await driver.quit();
	}
})();
