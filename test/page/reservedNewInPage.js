const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = class reservedNewInPage {
    driver;
    PAGE_URL = 'https://www.reserved.com/ru/ru/';
    pageContext;
  
    constructor(driver) {
      this.driver = driver;
    }
  
    openPage() {
      this.driver.get(this.PAGE_URL);
      this.pageContext = this;
      return this.pageContext;
    }
  
    async openNewInPage() {
      const buttNovelties = await this.driver.findElement(By.className('sc-fHxwqH jfOjFv'));
      await buttNovelties.click();
      return this.pageContext;
    }

    async openSizePanel() {
      const sizeCriterionButton = await this.driver.findElement(By.className('sc-uJMKN kNRivP'));
      await sizeCriterionButton.click();
      await this.driver.wait(until.elementLocated(By.className('sc-uJMKN kNRivP')));
      return this.pageContext;
    }
  
    async selectSize() {
      const selectedSizeButton =  await this.driver.wait(until.elementLocated(By.xpath('//*[@id="РазмерList"]/ul/li[5]/label/input')));
      await selectedSizeButton.click();
      return this.pageContext;
    }
  
    async filterOut() {
      const filterButton = this.driver.findElement(By.className('sc-jqCOkK beOXlA'));
      await filterButton.click();
      return this.pageContext;
    }
  
    async getValueFromBlock() {
      await this.driver.sleep(3000);
      let receivedValue = await this.driver.wait(until.elementLocated(By.css('#esProductQuantity > span'))).getText();
      return receivedValue;
    }
  }