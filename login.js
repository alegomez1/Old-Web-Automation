var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');

//https://www.youtube.com/watch?v=FDoSc9l_6h4

var driver = new webdriver.Builder().withCapabilities(Capabilities.chrome()
.set("acceptInsecureCerts", true)).build();

describe("Login", async ()=>{
//   before(function(){
//     console.log("im working")
// });

it('should log CSA user in', async (done)=>{

  await driver.get('https://stage-csa.mdlive.com/login')

  let usernameField = await driver.findElement(By.id('login_email'))
  usernameField.click()
  usernameField.sendKeys('democsa1')
  
  .then(async(done)=>{
    let passwordField = await driver.findElement(By.id('login_password'))
    passwordField.click()
    passwordField.sendKeys('mdlive123')


    .then(async (done)=>{
      let submitButton = await driver.findElement(By.xpath('/html/body/div/div[1]/form/button'))
      submitButton.click()
      // done()
    })
  })
  }).timeout(10000)

  it('user should be logged in', async()=>{

      let logoutButton = await driver.findElement(By.xpath('//*[@id="csa-user-logout"]/a'))
      expect(logoutButton).dom.to.be.visible()

  }).timeout(10000)

})

