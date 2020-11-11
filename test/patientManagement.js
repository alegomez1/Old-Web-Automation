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

describe('Patient Management', ()=>{

  describe('Profile', async ()=>{

    it('Update Profile', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059')
    let randomNumber = Math.floor(Math.random() * 100000) + 100
    console.log('***Random Number is: ' + randomNumber + '***')
    let emailField = await driver.findElement({id:'users_email'})
    let firstNameField = await driver.findElement({id:'users_first_name'})
    let lastNameField = await driver.findElement({id:'users_last_name'})
    let addressField = await driver.findElement({id:'users_address1'})
    let cityField = await driver.findElement({id:'users_city'})
    let stateDropdown = await driver.findElement({id:'users_state_id'})
    let primaryPhoneField = await driver.findElement({id:'users_phone'})
    let genderDropdown = await driver.findElement({id:'users_gender'})
    await emailField.click()
    await emailField.clear()
    await emailField.sendKeys(randomNumber.toString() + 'testemail@test.com')

    await firstNameField.click()
    await firstNameField.clear()
    await firstNameField.sendKeys('webautomationuser' + randomNumber.toString())

    await lastNameField.click()
    await lastNameField.clear()
    await lastNameField.sendKeys('lastname' + randomNumber.toString())

    await addressField.click()
    await addressField.clear()
    await addressField.sendKeys('SouthWest' + randomNumber.toString())

    await cityField.click()
    await cityField.clear()
    await cityField.sendKeys('Miami' + randomNumber.toString())

    let randomPhoneNumber = Math.floor(Math.random() * 9999999999) + 1111111111
    console.log('***Random Number is: ' + randomPhoneNumber + '***')

    await primaryPhoneField.click()
    await primaryPhoneField.clear()
    await primaryPhoneField.sendKeys(randomPhoneNumber.toString())

    let updateUserDetailsButton = await driver.findElement({id:'btn_update_button'})
    await updateUserDetailsButton.click()
    let confirmUpdateButton = await driver.findElement(By.xpath('//*[@id="btn_update_user"]'))
    await driver.sleep(1000)
    await confirmUpdateButton.click()
  }).timeout(500000)

  it('Resend Email', async ()=>{
  driver.get('https://stage-csa.mdlive.com/patients/642207059')
  let resendEmailButton = await driver.findElement({id:'btn_resend_email'})
  await resendEmailButton.click()
  let successMessage = await driver.findElement({id:'flash_success'})
  expect(await successMessage.isDisplayed()).to.be.true
  }).timeout(500000)


  it('Add Dependent', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059/add_dependent')
    let randomNumber = Math.floor(Math.random() * 100000) + 100
    let firstNameField = await driver.findElement({id:'first_name'})
    await firstNameField.click()
    await firstNameField.sendKeys('autoDependentFirstName' + randomNumber.toString())
    let secondNameField = await driver.findElement({id:'user_last_name'})
    await secondNameField.click()
    await secondNameField.sendKeys('autoDependentLastName' + randomNumber.toString())
    let phoneNumber = await driver.findElement({id:'user_emergency_contact_number'})
    await phoneNumber.click()
    await phoneNumber.sendKeys('9999999999')
    let birthdatePicker = await driver.findElement({id:'user_birthdate'})
    await birthdatePicker.click()
    await birthdatePicker.sendKeys('\uE013')
    await birthdatePicker.sendKeys('\uE013')
    await birthdatePicker.sendKeys('\uE013')
    await birthdatePicker.sendKeys('\uE007')
    let gender = await driver.findElement({id:'user_gender'})
    await gender.click()
    await gender.sendKeys('female')
    // await gender.sendKeys('\uE015')
    await gender.sendKeys('\uE007')
    let awareQuestion = driver.findElement({id:'user_aware_of_mdlive'})
    await awareQuestion.sendKeys('social')
    // await awareQuestion.sendKeys('\uE015')
    await awareQuestion.sendKeys('\uE007')
    let relationQuestion = driver.findElement({id:'user_relationship'})
    await relationQuestion.sendKeys('other')
    // await relationQuestion.sendKeys('\uE015')
    await relationQuestion.sendKeys('\uE007')
    let continueButton = await driver.findElement({id:'member_enroll_patient_btn_step2'})
    await continueButton.click()
    // await driver.sleep(2000)
    // expect(await driver.getCurrentUrl()).to.include('https://stage-csa.mdlive.com/patients/642207060')
  }).timeout(500000)





  it('Appointments', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059/cust_appointments')
    let appointments = await driver.findElement({id:'patient-cust-appointments'})
    expect(await appointments.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Health History', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059/health_histories')
    let healthHistory = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div[2]/div[3]/div'))
    expect(await healthHistory.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Activity History', async ()=>{
    driver.get('https://stage-csa.mdlive.com/activity_histories?type=Customer&user_id=642207059')
    let activitySearchForm = await driver.findElement({id:'activity_history_search_form'})
    expect(await activitySearchForm.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Audit Logs', async ()=>{
    driver.get('https://stage-csa.mdlive.com/audit_logs?patient_id=642207059')
    let auditLogsSearchForm = await driver.findElement({id:'audit_logs_search_form'})
    expect(await auditLogsSearchForm.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Records', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059/documents')
    let recordsHeader = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[2]/div[2]/legend[1]'))
    expect(await recordsHeader.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Transaction History', async ()=>{
    driver.get('https://stage-csa.mdlive.com/consultation_credits/642207059/transaction_history')
    let transactionHistoryHeader = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div[2]/legend'))
    expect(await transactionHistoryHeader.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Orders', async ()=>{
    driver.get('https://stage-csa.mdlive.com/patients/642207059/orders')
    let ordersTable = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div[2]/div[2]/table/thead/tr/th[1]'))
    expect(await ordersTable.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Chat History', async ()=>{
    driver.get('https://stage-csa.mdlive.com/support_chats/patient_history_index?type=Customer&user_id=642207059')
    let chatHistoryTable = await driver.findElement({id:'ChatHistoryContent'})
    expect(await chatHistoryTable.isDisplayed()).to.be.true
  }).timeout(500000)

  it('Notes', async ()=>{
    driver.get('https://stage-csa.mdlive.com/notes/new?type=Customer&user_id=642207059')
    let firstDispositionDropdown = await driver.findElement({id:'note_first_disposition'})
    await firstDispositionDropdown.click()
    await firstDispositionDropdown.sendKeys('consult')
    await firstDispositionDropdown.sendKeys('\uE004')
    let secondDispositionDropdown = await driver.findElement({id:'note_second_disposition'})
    await secondDispositionDropdown.click()
    await secondDispositionDropdown.sendKeys('consult')
    await secondDispositionDropdown.sendKeys('\uE004')
    let note = await driver.findElement({id:'note_note'})
    await note.click()
    await note.sendKeys('web auto consult')
    let submitButton = await driver.findElement({id:'note_btn'})
    await submitButton.click()
    let successMessage = await driver.findElement({id:'flash_success'})
    expect(await successMessage.isDisplayed()).to.be.true
  }).timeout(500000)

})
})

})