var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(Capabilities.chrome()
.set("acceptInsecureCerts", true)).build();

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


describe('CSA User Profile', ()=>{
  it('Escalation Form',  async ()=>{
    let csaDropdown = await driver.findElement(By.css('#csa-user-dropdown > a:nth-child(1)'))
    await csaDropdown.click()

    let escalationFormDropdown = await driver.findElement(By.css('#csa-user-dropdown > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)'))
    await escalationFormDropdown.click()

    let escalationForm = await driver.findElement(By.id('escalation_form'))
    expect(await escalationForm.isDisplayed()).to.be.true

    let name = await driver.findElement({id:'escalation_name'})
    await name.click()
    await name.sendKeys('democsa1')

    let submitButton = await driver.findElement({id:'myaccount_btn'})
    await submitButton.click()

    let successMessage = await driver.findElement({id:'flash_success'})
    expect(await successMessage.isDisplayed()).to.be.true
  }).timeout(50000)
  it('My Account', async ()=>{
    
    let csaDropdown = await driver.findElement(By.css('#csa-user-dropdown > a:nth-child(1)'))
    await csaDropdown.click()

    let myAccountDropdown = await driver.findElement(By.css('#csa-user-dropdown > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)'))
    await myAccountDropdown.click()

    let estTimezone = await driver.findElement({id:'user_us_time_zone_id'})
    expect(await estTimezone.getText()).to.include('EST')
  }).timeout(50000)
})

}).timeout(500000)