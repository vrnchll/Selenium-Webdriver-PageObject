const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = class reservedNewInPage {
    driver;
    PAGE_URL = 'https://www.reserved.com/ru/ru/';
    pageContext;

    novelties = By.linkText('НОВИНКИ');
    close = By.className('close');
    sizePanel = By.xpath('//label[contains(text(),\'Размер\')]');
    filter = By.xpath('//button[contains(text(),\'Фильтровать\')]');
    selectedSize = By.id('sizes-31');
    receivedValue = By.css('#esProductQuantity > span');


    constructor(driver) {
      this.driver = driver;
    }
  
    openPage() {
      this.driver.get(this.PAGE_URL);
      this.pageContext = this;
      return this.pageContext;
    }
  
    async openNewInPage() {
      const buttNovelties = await this.driver.findElement(this.novelties);
      await buttNovelties.click();
      await this.driver.findElement(this.close).click();
      return this.pageContext;
    }

    async openSizePanel() {
      const sizeCriterionButton = await this.driver.wait(until.elementLocated(this.sizePanel));
      await sizeCriterionButton.click();
      return this.pageContext;
    }
  
    async selectSize() {
      const selectedSizeButton =  await this.driver.wait(until.elementLocated(this.selectedSize),3000);
      await selectedSizeButton.click();
      return this.pageContext;
    }
  
    async filterOut() {
      const filterButton = await this.driver.findElement(this.filter);
      await filterButton.click();
      return this.pageContext;
    }
  
    async getValueFromBlock() {
      await this.driver.sleep(5000);
      let received = await this.driver.wait(until.elementLocated(this.receivedValue),3000).getText();
      return received;
    }
  }