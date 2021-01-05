var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');
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

describe('Patient Search', ()=>{
  it('Searches for patient', async ()=>{
    let userIDField = await driver.findElement(By.id('patient_search_unique_id'))
    await userIDField.click()
    await userIDField.sendKeys('642207059')

    let searchButton = await driver.findElement(By.id('btnSearchPatient'))
    await searchButton.click()

    let searchResult = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div/div[2]/table/tbody/tr/td[3]'))
    expect(await searchResult.getText()).to.include('webautomationuser63359')
  }).timeout(50000)

  it('Can view patient profile', async ()=>{
    let viewProfileButton = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div/div[2]/table/tbody/tr/td[9]/a'))
    await viewProfileButton.click()

    let url = await driver.getCurrentUrl()
    expect(url).to.include('https://stage-csa.mdlive.com/patients/642207059')
  }).timeout(50000)

}).timeout(50000)

describe('Provider Search', ()=>{
  it('Searches for provider', async ()=>{
    await driver.get('https://stage-csa.mdlive.com/')

    let providerTabButton =  await driver.findElement(By.id('provider'))
    await providerTabButton.click()

    let userIDField = await driver.findElement(By.id('search_id'))
    await userIDField.click()
    await userIDField.sendKeys('642199212')

    await userIDField.sendKeys("\uE007")

    let searchResult = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div/div[2]/table/tbody/tr/td[1]'))
    expect(await searchResult.getText()).to.include('Shepherd')
  }).timeout(50000)

  it('Can view patient profile', async ()=>{
    let viewProfileButton = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div/div[2]/table/tbody/tr/td[9]/a'))
    await viewProfileButton.click()

    let url = await driver.getCurrentUrl()
    expect(url).to.include('https://stage-csa.mdlive.com/providers/642199212')
  }).timeout(50000)

}).timeout(50000)

}).timeout(500000)
