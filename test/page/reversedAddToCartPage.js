const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = class reversedAddToCartPage {
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
        const openButton = await this.driver.findElement(By.className('sc-hjRWVT gNdero menu-submenu type-default level-0'));
        await openButton.click();
        return this.pageContext;
      }
  
      async moveToItem()  {
        const moveButton = await this.driver.findElement(By.xpath('//*[@id="page"]/section/div/section[6]/div/div[1]'));
        await moveButton.click();
        const closeButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="newsletterContainer"]/div[1]')));
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
            const cartButton = await this.driver.findElement(By.className('sc-gqjmRU bXRaMh'));
            await cartButton.click();
            return this.pageContext;
        }
  
      async continueShop()
        {
          await this.driver.wait(until.elementLocated(By.className('continue-shopping')));
          const continueButton = await this.driver.findElement(By.className('continue-shopping'));
          await continueButton.click();
          return this.pageContext;

        }
  
      async getValueFromCart() {
        await this.driver.sleep(3000);
        let receivedValue = await this.driver.wait(until.elementLocated(By.className('sc-jWojfa kHdrZe'))).getText();
        return receivedValue;
    }
  }