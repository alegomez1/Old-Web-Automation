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
describe('User Management', ()=>{

  describe('Manage Roles and Rights', ()=>{
    it('Creates Roles', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/roles/new?')
      let roleNameField = await driver.findElement({id:'role_name'})
      expect(await roleNameField.isDisplayed()).to.be.true
      let randomNumber = Math.floor(Math.random() * 88888) + 888
      let roleName = 'zzzzWeb' + randomNumber.toString()
      await roleNameField.click()
      await roleNameField.sendKeys(roleName)
      let saveButton = await driver.findElement({id:'save'})
      await saveButton.click()
    }).timeout(50000)
    it('Can edit rights', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/rights/3183/edit')
      let selectAllCheckbox = await driver.findElement({id:'select_all'})
      expect(await selectAllCheckbox.isDisplayed()).to.be.true
      await selectAllCheckbox.click()
      let saveButton = await driver.findElement({id:'save'})
      await saveButton.click()
      let successBanner = await driver.findElement({id:'flash_success'})
      expect(await successBanner.isDisplayed()).to.be.true
    }).timeout(50000)
  })

  describe('Manage Users', ()=>{
    it('Search Users', async ()=>{
      await driver.get('https://stage-csa.mdlive.com/users')
      let usernameField = await driver.findElement({id:'search_username'})
      await usernameField.click()
      await usernameField.sendKeys('alexwebauto999')
      await usernameField.sendKeys('\uE007')
      let searchResult = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/table/tbody/tr/td[1]'))
      expect(await searchResult.getText()).to.include('alexwebauto999')
    }).timeout(50000)
    it('Can Deactivate and Activate User', async ()=>{
      let deactivateButton = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/table/tbody/tr/td[7]/a[2]'))
      await deactivateButton.click()
      let alert = await driver.switchTo().alert();
      await alert.accept()
      let successMessage = await driver.findElement({id:'flash_success'})
      expect(await successMessage.isDisplayed()).to.be.true
    }).timeout(50000)
  })

    // describe('Manage Credits',  ()=>{
    //   it('Define Credits', async ()=>{
    //     await driver.get('https://stage-csa.mdlive.com/promotions/new')
    //     let affiliationSpinner = driver.findElement({id:'promotional_credit_affiliation_id'})
    //     await affiliationSpinner.click()
    //     await affiliationSpinner.sendKeys('dtc')
    //     await affiliationSpinner.sendKeys('\uE007')
    //     let promoNameField = await driver.findElement({id:'promotional_credit_name'})
    //     let randomNumber = Math.floor(Math.random() * 88888) + 888
    //     let promoName = 'zzzzWeb' + randomNumber.toString()
    //     await promoNameField.click()
    //     await promoNameField.sendKeys(promoName)
    //     let numberOfCredits = await (await driver).findElement({id:'promotional_credit_signup_credits_attributes__no_of_credits'})
    //     await numberOfCredits.sendKeys('99')
    //     let startDate = await driver.findElement({id:'start_date_dummy'})
    //     await startDate.click()
    //     await startDate.sendKeys('\uE015')
    //     await startDate.sendKeys('\uE007')
    //     let endDate = await driver.findElement({id:'end_date_dummy'})
    //     await endDate.click()
    //     await endDate.sendKeys('\uE015')
    //     await endDate.sendKeys('\uE015')
    //     await endDate.sendKeys('\uE015')
    //     await endDate.sendKeys('\uE007')
    //     let paymentType = await driver.findElement({id:'promotional_credit_signup_credits_attributes__credit_type'})
    //     await paymentType.click()
    //     await paymentType.sendKeys('c')
    //     await paymentType.sendKeys('\uE007')
    //     let consultType = await driver.findElement({id:'promotional_credit_signup_credits_attributes__consult_type'})
    //     await consultType.click()
    //     await consultType.sendKeys('m')
    //     await consultType.sendKeys('\uE007')
    //     let familyRadioButton = await driver.findElement({id:'promotional_credit_signup_credits_attributes__parent_level_true'})
    //     await familyRadioButton.click()
    //     let submitButton = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[2]/div/form/fieldset/div[13]/div[1]/input'))
    //     await submitButton.click()
    //     let successMessage = await driver.findElement({id:'flash_success'})
    //     expect(await successMessage.isDisplayed()).to.be.true
    //   }).timeout(50000)
      // it('Search Credits', async ()=>{
      //   await driver.get('https://stage-csa.mdlive.com/promotions/new')

      // }).timeout(50000)
    // })

    describe('Manage Promocodes',  ()=>{
      it('Add Promocode',  async ()=>{
        await driver.get('https://stage-csa.mdlive.com/promo_codes/new')
        let promocodeName = driver.findElement({id:'promo_code_name'})
        let randomNumber = Math.floor(Math.random() * 88888) + 888
        let promoName = 'zzzzWeb' + randomNumber.toString()
        await promocodeName.click()
        await promocodeName.sendKeys(promoName)
        let promoDescription = driver.findElement({id:'promo_code_description'})
        await promoDescription.click()
        await promoDescription.sendKeys('Web auto description')
        let promoCodeCode = await driver.findElement({id:'promo_code_code'})
        await promoCodeCode.click()
        await promoCodeCode.sendKeys(promoName)
        let promoDiscountByDollar = driver.findElement({id:'promo_code_discount_type_by_rate'})
        await promoDiscountByDollar.click()
        let promoDiscountValue = driver.findElement({id:'promo_code_discount_value'})
        await promoDiscountValue.click()
        await promoDiscountValue.sendKeys('50')
        let startDate = await driver.findElement({id:'start_date_dummy'})
        await startDate.click()
        await startDate.sendKeys('\uE015')
        await startDate.sendKeys('\uE007')
        let endDate = await driver.findElement({id:'end_date_dummy'})
        await endDate.click()
        await endDate.sendKeys('\uE015')
        await endDate.sendKeys('\uE015')
        await endDate.sendKeys('\uE015')
        await endDate.sendKeys('\uE007')
        let medicalRadioButton = await driver.findElement({id:'promo_code_consult_type_medical'})
        await medicalRadioButton.click()
        let oncePerMember = await driver.findElement({id:'promo_code_reusability_once_per_member'})
        await oncePerMember.click()
        let submitButton = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[2]/div/form/div[13]/div[1]/input'))
        await submitButton.click()
        let successMessage = await driver.findElement({id:'flash_success'})
        expect(await successMessage.isDisplayed()).to.be.true
      }).timeout(50000)
      it('Search Promocode', async ()=>{
       let searchField = await driver.findElement({id:'search_code'})
       await searchField.click()
       await searchField.sendKeys('zzDoNotDelete')
       let searchButton = await driver.findElement({id:'btn_ncq_search_form'})
       await searchButton.click()
       let searchResult = await driver.findElement(By.xpath('/html/body/div/div[1]/main/div[3]/div/table/tbody/tr/td[1]'))
        expect(await searchResult.getText()).to.include('zzDoNotDeleteWeb')
      }).timeout(50000)
    })
})
}).timeout(500000)

