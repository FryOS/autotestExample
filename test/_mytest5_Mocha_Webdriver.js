const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

 suite(function(env) {
   describe('library-app.firebaseapp.com', function() {
     let driver;

     before(async function() {
       driver = await env.builder().build();
     });

     after(() => driver.quit());

     it('demo', async function() {
      await driver.get('http://library-app.firebaseapp.com');

			await driver.findElement(By.css('input'));
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

			
     });
   });
 });