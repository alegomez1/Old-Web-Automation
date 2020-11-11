var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');
const { brown } = require('color-name');
const { once } = require('process');

var driver = new webdriver.Builder().withCapabilities(Capabilities.chrome()
.set("acceptInsecureCerts", true,)).build();

describe('Testing Suite', ()=>{

  before(function() {
    driver.get('https://stage-csa.mdlive.com/login')
});
  after(function() {
    driver.close() 
});

describe("Login", ()=>{

it('should log CSA user in',  async ()=>{

  let usernameField = await driver.findElement(By.id('login_email'))
  await usernameField.click()
  await usernameField.sendKeys('democsa1')

  let passwordField = await driver.findElement(By.id('login_password'))
  await passwordField.click()
  await passwordField.sendKeys('mdlive123')

  let submitButton = await driver.findElement(By.xpath('/html/body/div/div[1]/form/button'))
  await submitButton.click()

  }).timeout(50000)
})



}).timeout(500000)

