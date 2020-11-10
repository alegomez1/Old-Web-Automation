var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');

//https://www.youtube.com/watch?v=FDoSc9l_6h4

var driver = new webdriver.Builder().withCapabilities(Capabilities.chrome()
.set("acceptInsecureCerts", true)).build();

describe('Testing Suite', ()=>{

  before(function() {
    driver.get('https://stage-csa.mdlive.com/login')
});
  after(function() {
    driver.quit() 
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


// describe('CSA User Profile', ()=>{
//   it('Escalation Form',  async ()=>{
//     let csaDropdown = await driver.findElement(By.css('#csa-user-dropdown > a:nth-child(1)'))
//     await csaDropdown.click()

//     let escalationFormDropdown = await driver.findElement(By.css('#csa-user-dropdown > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)'))
//     await escalationFormDropdown.click()

//     let escalationForm = await driver.findElement(By.id('escalation_form'))
//     expect(await escalationForm.isDisplayed()).to.be.true

//     let name = await driver.findElement({id:'escalation_name'})
//     await name.click()
//     await name.sendKeys('democsa1')

//     let submitButton = await driver.findElement({id:'myaccount_btn'})
//     await submitButton.click()

//     let successMessage = await driver.findElement({id:'flash_success'})
//     expect(await successMessage.isDisplayed()).to.be.true
//   }).timeout(50000)
//   it('My Account', async ()=>{
    
//     let csaDropdown = await driver.findElement(By.css('#csa-user-dropdown > a:nth-child(1)'))
//     await csaDropdown.click()

//     let myAccountDropdown = await driver.findElement(By.css('#csa-user-dropdown > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)'))
//     await myAccountDropdown.click()

//     let estTimezone = await driver.findElement({id:'user_us_time_zone_id'})
//     expect(await estTimezone.getText()).to.include('EST')
//   }).timeout(50000)
// })


describe('Queues', ()=> {

  // describe('PCC Exceptions',  ()=>{

  //   it('Unresolved - PCC Exceptions', async ()=>{
  //     let queuesDropdown = await driver.findElement(By.css('#queues-dropdown > a:nth-child(1)'))
  //     await queuesDropdown.click()

  //     let pccExceptions = await driver.findElement(By.css('#queues-dropdown > ul > li:nth-child(4) > a'))
  //     await pccExceptions.click()
  
  //     let unresolved = await driver.findElement(By.css('#exceptionContent > div.panel.panel-default > table > thead > tr > th:nth-child(5)'))
  //     expect(await unresolved.getText()).to.include('Consultation')
  //   }).timeout(50000)

  //   it('Resolved - PCC Exceptions', async ()=>{

  //    await driver.get('https://stage-csa.mdlive.com/exception_queues?exception_type=resolved')

  //     let dispositionNotes = await driver.findElement(By.css('#exceptionContent > div.table-responsive > table > thead > tr > th:nth-child(9)'))
  //     expect(await dispositionNotes.getText()).to.include('Disposition Notes')
  //   }).timeout(50000)

  //   it('Contact Requests - PCC Exceptions', async ()=>{
  //     await driver.get('https://stage-csa.mdlive.com/contact_requests')
  //     let customerDetails = await driver.findElement(By.css('#contact-requests-table > thead > tr > th:nth-child(1)'))
  //     expect(await customerDetails.getText()).to.include('Customer details')
  //   })
  // })

  // describe('Refunds', ()=>{
  //   it('Unprocessed Requests', async ()=>{
  //     await driver.get('https://stage-csa.mdlive.com/refund_requests?status=pending')
  //     let unprocessedRequests = await driver.findElement({id:'unprocessed_refunds_download_container'})
  //     expect(await unprocessedRequests.isDisplayed()).to.be.true
  //   })
  //   it('Open Auth Less Than 3O Days', async ()=>{
  //     await driver.get('https://stage-csa.mdlive.com/cust_appointment_open_auths')
  //     let openAuth = await driver.findElement({id:'UnprocessedRefundsContent'})
  //     expect(await openAuth.isDisplayed()).to.be.true
  //   })
  // })

  describe('Consultations', ()=>{
    it('Completed Consultations', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/on_call_events/completed_consultations')
      let completedConsultations = await driver.findElement({id:'OnCallEventsContent'})
      expect(await completedConsultations.isDisplayed()).to.be.true
    })
    it('Completed Consultations', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/on_call_events/missed_consultations')
      let missedConsultations = await driver.findElement({id:'OnCallEventsContent'})
      expect(await missedConsultations.isDisplayed()).to.be.true
    })
  })
})








}).timeout(500000)




