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

describe('Queues', ()=> {

  describe('PCC Exceptions',  ()=>{

    it('Unresolved - PCC Exceptions', async ()=>{
      let queuesDropdown = await driver.findElement(By.css('#queues-dropdown > a:nth-child(1)'))
      await queuesDropdown.click()

      let pccExceptions = await driver.findElement(By.css('#queues-dropdown > ul > li:nth-child(4) > a'))
      await pccExceptions.click()
  
      let unresolved = await driver.findElement(By.css('#exceptionContent > div.panel.panel-default > table > thead > tr > th:nth-child(5)'))
      expect(await unresolved.getText()).to.include('Consultation')
    }).timeout(50000)

    it('Resolved - PCC Exceptions', async ()=>{

     await driver.get('https://stage-csa.mdlive.com/exception_queues?exception_type=resolved')

      let dispositionNotes = await driver.findElement(By.css('#exceptionContent > div.table-responsive > table > thead > tr > th:nth-child(9)'))
      expect(await dispositionNotes.getText()).to.include('Disposition Notes')
    }).timeout(50000)

    it('Contact Requests - PCC Exceptions', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/contact_requests')
      let customerDetails = await driver.findElement(By.css('#contact-requests-table > thead > tr > th:nth-child(1)'))
      expect(await customerDetails.getText()).to.include('Customer details')
    }).timeout(50000)
  })

  describe('Refunds', ()=>{
    it('Unprocessed Requests', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/refund_requests?status=pending')
      let unprocessedRequests = await driver.findElement({id:'unprocessed_refunds_download_container'})
      expect(await unprocessedRequests.isDisplayed()).to.be.true
    }).timeout(50000)
    it('Open Auth Less Than 3O Days', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/cust_appointment_open_auths')
      let openAuth = await driver.findElement({id:'UnprocessedRefundsContent'})
      expect(await openAuth.isDisplayed()).to.be.true
    }).timeout(50000)
  })

  describe('Consultations', ()=>{
    it('Completed Consultations', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/on_call_events/completed_consultations')
      let completedConsultations = await driver.findElement({id:'OnCallEventsContent'})
      expect(await completedConsultations.isDisplayed()).to.be.true
    }).timeout(50000)
    it('Completed Consultations', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/on_call_events/missed_consultations')
      let missedConsultations = await driver.findElement({id:'OnCallEventsContent'})
      expect(await missedConsultations.isDisplayed()).to.be.true
    }).timeout(50000)
  })

  describe('Asynchronous Appointments', ()=>{
    it('Asynchronous Appointments', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/asynchronous_cust_appointments')
      let asynchronousAppointments = await driver.findElement({id:'async_appointment_queue'})
      expect(await asynchronousAppointments.isDisplayed()).to.be.true
    }).timeout(50000)
  })

  describe('Appointment Reviews', ()=>{
    it('Appointment Reviews', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/appointment_reviews')
      let appointmentReviews = await driver.findElement({id:'cust_appointmentsContent'})
      expect(await appointmentReviews.isDisplayed()).to.be.true
    }).timeout(50000)
  })


    describe('Nurse on Call', ()=>{
    it('Unresolved', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/nurse_call_queues?type=unresolved')
      let unresolvedQueue = await driver.findElement({id:'nurse-call-queue-content'})
      expect(await unresolvedQueue.isDisplayed()).to.be.true
    }).timeout(50000)
    it('Resolved', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/nurse_call_queues?type=resolved')
      let resolvedQueue = await driver.findElement({id:'nurse-call-queue-content'})
      expect(await resolvedQueue.isDisplayed()).to.be.true
    }).timeout(50000)
  })


  


})
}).timeout(500000)