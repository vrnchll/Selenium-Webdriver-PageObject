const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = class reversedPricePage {
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

      async openNewCollection() {
        const openButton = await this.driver.findElement(By.xpath('//*[@id="pageHeader"]/div/div[1]/div/div/p/a'));
        await openButton.click();
        return this.pageContext;
      }
  
      async moveToItem()  {
        const moveButton = this.driver.findElement(By.className('sc-fMiknA fWcjva es-product'));
        await moveButton.click();
        const closeButton = this.driver.findElement(By.xpath('//*[@id="newsletterContainer"]/div[1]'));
        await closeButton.click();
        return this.pageContext;
       }
    
  
      async selectSize() {
          const selectedSizeButton = this.driver.findElement(By.css('#productContainer > section > section.size-picker > div > div.size-selected'));
          await selectedSizeButton.click();
          const selectOneSize = this.driver.findElement(By.css('#productContainer > section > section.size-picker > div > div.size-list-overlay.visible > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(1)'));
          await selectOneSize.click();
          return this.pageContext;
        }
  
      async addToCart()
        {
            const cartButton = this.driver.findElement(By.className('sc-gqjmRU bXRaMh'));
            await cartButton.click();
            return this.pageContext;
        }
  
      async continueShop()
        {
          await this.driver.wait(until.elementLocated(By.className('continue-shopping')));
          const continueButton = this.driver.findElement(By.className('continue-shopping'));
          await continueButton.click();
          return this.pageContext;
        }
  
      async getValueFromCart() {
        await this.driver.sleep(3000);
        let receivedValue = await this.driver.wait(until.elementLocated(By.className('sc-jWojfa kHdrZe'))).getText();
        return receivedValue;
    }
  }