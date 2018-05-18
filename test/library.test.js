const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

 suite(function(env) {
   describe('library-app.firebaseapp.com', function() {
		 let driver;
		 this.timeout(25000);

     before(async function() {
       driver = await env.builder().build();
     });

     after(() => driver.quit());

     it('find input', async function() {
      await driver.get('http://library-app.firebaseapp.com');
			await driver.findElement(By.css('input'));					
		 });

		 it('find input and sendKeys user@gmail.com', async function() {
      await driver.get('http://library-app.firebaseapp.com');
			await driver.findElement(By.css('input'));
			await driver.findElement(By.css('input')).sendKeys('user@gmail.com');			
		 });

		 it('find input and sendKeys user@gmail.com and click button', async function() {
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
		 });

		 


   });
 });

 //mocha .\library.test.js --reporter mochawesome --reporter-options autoOpen=true // для запуска отчета в html версии