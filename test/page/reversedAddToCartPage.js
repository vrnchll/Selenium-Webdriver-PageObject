const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = class reversedAddToCartPage {
    driver;
    PAGE_URL = 'https://www.reserved.com/ru/ru/yt857-05x/yt857-05x-t03-plaszcz-k-re';
    pageContext;
  
selectedSize = By.xpath('//span[contains(text(),\'36 I RU 44\')]');

chooseSize = By.className('size-selected');
close = By.className('close');
addingToCart = By.className('sc-gqjmRU bXRaMh');
continueShopping = By.className('continue-shopping');

moveToCart = By.linkText('В корзину');
addingProduct = By.linkText('Утепленное пальто');

      constructor(driver) {
        this.driver = driver;
      }

      openPage() {
        this.driver.get(this.PAGE_URL);
        this.pageContext = this;
        return this.pageContext;
      }

       async selectSize() {
        const selectedSizeButton = this.driver.findElement(this.chooseSize);
        await selectedSizeButton.click();
        const selectOneSize = await this.driver.wait(until.elementLocated(this.selectedSize),3000);
        await selectOneSize.click();
        return this.pageContext;
      }
  
      async addToCart()
        {
            const cartButton = await this.driver.findElement(this.addingToCart);
            await cartButton.click();
            return this.pageContext;
        }
  
      async continueShop()
        {
          const movingToCart = await this.driver.wait(until.elementLocated(this.moveToCart),5000);
          await movingToCart.click();
          return this.pageContext;

        }
  
      async isAdding() {
        await this.driver.sleep(3000);
        const adding = await this.driver.findElement(this.addingProduct);
        return adding.isDisplayed().then(e => e);
    }
  }