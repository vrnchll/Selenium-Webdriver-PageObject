const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('chai').assert;

const reservedNewInPage = module.require('./page/reservedNewInPage');
const reversedPricePage = module.require('./page/reversedPricePage');

const driver = new Builder().forBrowser('chrome').build();

describe('Selenium-Webdriver-PageObject test', () => {

    it('should add the value 1 in recycle icon"', async () => {
        const pricePageContext = new reversedPricePage(driver).openPage().pageContext;
        await pricePageContext.openNewCollection();
        await pricePageContext.moveToItem();
        await pricePageContext.selectSize();
        await pricePageContext.addToCart();
        await pricePageContext.continueShop();
        const expectedValue = await pricePageContext.getValueFromCart();
        assert.strictEqual(expectedValue, '1');
    })

    it('should change value from 650 to 5 due to filtering by size in block "650 Товары"', async () => {
        const newInPageContext = new reservedNewInPage(driver).openPage().pageContext;
        await newInPageContext.openNewInPage();
        await newInPageContext.openSizePanel();
        await newInPageContext.selectSize();
        await newInPageContext.filterOut();
        const expectedValue = await newInPageContext.getValueFromBlock();
        assert.strictEqual(expectedValue, '5');
        await driver.quit();
    })
    });
    