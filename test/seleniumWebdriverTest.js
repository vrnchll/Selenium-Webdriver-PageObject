const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('chai').assert;

const reservedNewInPage = module.require('./page/reservedNewInPage');
const reversedPricePage = module.require('./page/reversedAddToCartPage');

const driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();

describe('Selenium-Webdriver-PageObject test', () => {

    it('should add the value 1 in recycle icon"', async () => {
        const newAddToCartContext = new reversedPricePage(driver).openPage().pageContext;
        await newAddToCartContext.selectSize();
        await newAddToCartContext.addToCart();
        await newAddToCartContext.continueShop();
        const isAddingProduct = await newAddToCartContext.isAdding();
        await assert.isTrue(isAddingProduct);
    })

    it('should change value from 650 to 11 due to filtering by size in block "650 Товары"', async () => {
        const newInPageContext = new reservedNewInPage(driver).openPage().pageContext;
        await newInPageContext.openNewInPage();
        await newInPageContext.openSizePanel();
        await newInPageContext.selectSize();
        await newInPageContext.filterOut();
        const expectedValue = await newInPageContext.getValueFromBlock();
        assert.strictEqual(expectedValue, '11');
        await driver.quit();
    })

   

   
    });
    