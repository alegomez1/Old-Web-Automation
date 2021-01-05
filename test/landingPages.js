var webdriver = require('selenium-webdriver')
const { expect } = require('chai');
const { Builder, By, until, Capabilities, Capability } = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(Capabilities.chrome()
.set("acceptInsecureCerts", true,)).build();

describe('Testing Suite', ()=>{
  after(function() {
    driver.close() 
});

describe("Standard Employee/Health Plan", ()=>{

  it('Home', async ()=>{
    await driver.get('https://stage-members.mdlive.com/toyota/landing_home')
    let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
    expect( await activateNowButton.getText()).to.include('ACTIVATE NOW')
  }).timeout(50000)

  it('Sign In', async ()=>{
    await driver.get('https://stage-members.mdlive.com/toyota/member_login')
    let signInText = await driver.findElement(By.css('.col > h2:nth-child(1)'))
    expect( await signInText.getText()).to.include('Sign In to Your Account')
  }).timeout(50000)

  it('Register', async ()=>{
    await driver.get('https://stage-patient.mdlive.com/register?id=1002')
    let registerText = await driver.findElement(By.css('.affiliation-display-name > span:nth-child(1)'))
    expect( await registerText.getText()).to.include('Register for MDLIVE.')
  }).timeout(50000)

  it('FAQs', async ()=>{
    await driver.get('https://stage-members.mdlive.com/toyota/how_it_works')
    let faqText = await driver.findElement(By.css('.faq-title'))
    expect( await faqText.getText()).to.include('Frequently Asked Questions')
  }).timeout(50000)

  it('Contact Us', async ()=>{
    await driver.get('https://stage-members.mdlive.com/toyota/contact_us')
    let activateNowButton = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
    expect( await activateNowButton.getText()).to.include('Contact Us')
  }).timeout(50000)
})

describe("Cigna", ()=>{

  it('Home', async ()=>{
    await driver.get('https://stage-members.mdlive.com/cignacompanies/landing_home')
    let activateNowButton = await driver.findElement(By.css('.bigbt'))
    expect( await activateNowButton.getText()).to.include('Activate Now')
  }).timeout(50000)

  it('Sign In', async ()=>{
    await driver.get('https://stage-members.mdlive.com/cignacompanies/member_login')
    let signInButton = await driver.findElement(By.id('submit_login'))
    expect( await signInButton.isDisplayed()).to.be.true
  }).timeout(50000)

  it('Register', async ()=>{
    await driver.get('https://stage-members.mdlive.com/cignacompanies/new_registration')
    let continueButton = await driver.findElement(By.id('check_eligibility'))
    expect( await continueButton.isDisplayed()).to.be.true
  }).timeout(50000)

  it('FAQs', async ()=>{
    await driver.get('https://stage-members.mdlive.com/cignacompanies/how_it_works')
    let faqText = await driver.findElement(By.css('.faq'))
    expect( await faqText.getText()).to.include('Frequently Asked Questions')
  }).timeout(50000)

  it('Contact Us', async ()=>{
    await driver.get('https://stage-members.mdlive.com/cignacompanies/contact_us')
    let contactUs = await driver.findElement(By.css('#contact-us > h1:nth-child(2)'))
    expect( await contactUs.getText()).to.include('Contact Us')
  }).timeout(50000)
})

describe("BCBS", ()=>{

  describe('BCBSIL', ()=>{
    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsil/landing_home')
      let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await activateNowButton.getText()).to.include('Activate Now')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsil/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsil/new_registration?secondary_reg=true')
      let continueButton = await driver.findElement(By.css('.register-submit'))
      expect( await continueButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsil/how_it_works')
      let faqText = await driver.findElement(By.css('.faq-title'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsil/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('BCBSOK', ()=>{
    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsok/landing_home')
      let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await activateNowButton.getText()).to.include('Activate Now')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsok/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsok/new_registration?secondary_reg=true')
      let continueButton = await driver.findElement(By.css('.register-submit'))
      expect( await continueButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsok/how_it_works')
      let faqText = await driver.findElement(By.css('.faq-title'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsok/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('BCBSNM', ()=>{
    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsnm/landing_home')
      let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await activateNowButton.getText()).to.include('Activate Now')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsnm/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsnm/new_registration?secondary_reg=true')
      let continueButton = await driver.findElement(By.css('.register-submit'))
      expect( await continueButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsnm/how_it_works')
      let faqText = await driver.findElement(By.css('.faq-title'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsnm/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('BCBSTX', ()=>{
    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstx/landing_home')
      let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await activateNowButton.getText()).to.include('Activate Now')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstx/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstx/new_registration?secondary_reg=true')
      let continueButton = await driver.findElement(By.css('.register-submit'))
      expect( await continueButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstx/how_it_works')
      let faqText = await driver.findElement(By.css('.faq-title'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstx/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('BCBSMT', ()=>{
    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsmt/landing_home')
      let activateNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await activateNowButton.getText()).to.include('Activate Now')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsmt/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsmt/new_registration?secondary_reg=true')
      let continueButton = await driver.findElement(By.css('.register-submit'))
      expect( await continueButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsmt/how_it_works')
      let faqText = await driver.findElement(By.css('.faq-title'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbsmt/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h2:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

})

describe('BCBSTN', ()=>{

    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstma/landing_home')
      let registerNowButton = await driver.findElement(By.css('div.activate-now:nth-child(4) > a:nth-child(1)'))
      expect( await registerNowButton.getText()).to.include('REGISTER NOW')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstma/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-patient.mdlive.com/register?id=2675')
      let continueButton = await driver.findElement(By.css('.affiliation-display-name > span:nth-child(1)'))
      expect( await continueButton.getText()).to.include('Register for PhysicianNow.')
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstma/how_it_works')
      let faqText = await driver.findElement(By.css('.info > h2:nth-child(1)'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/bcbstma/contact_us')
      let contactUs = await driver.findElement(By.css('#contact-us > h1:nth-child(2)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('UNC', ()=>{

    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/unchealthcare/landing_home')
      let getStartedButton = await driver.findElement(By.id('visualButton'))
      expect( await getStartedButton.getText()).to.include('GET STARTED')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/unchealthcare/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-patient.mdlive.com/register?id=2669')
      let continueButton = await driver.findElement(By.css('div.col:nth-child(1) > h1:nth-child(1)'))
      expect( await continueButton.getText()).to.include('Activate your UNC Urgent Care 24/7 Virtual Visit Account.')
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/unchealthcare/how_it_works')
      let faqText = await driver.findElement(By.css('div.faq:nth-child(1) > h1:nth-child(1)'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/unchealthcare/contact_us')
      let contactUs = await driver.findElement(By.css('div.innerWidthBlock:nth-child(8) > h1:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

  describe('Cone Health', ()=>{

    it('Home', async ()=>{
      await driver.get('https://stage-members.mdlive.com/conehealth/landing_home')
      let connectNowButton = await driver.findElement(By.id('visualButton'))
      expect( await connectNowButton.getText()).to.include('CONNECT NOW')
    }).timeout(50000)
  
    it('Sign In', async ()=>{
      await driver.get('https://stage-members.mdlive.com/conehealth/member_login')
      let signInButton = await driver.findElement(By.id('submit_login'))
      expect( await signInButton.isDisplayed()).to.be.true
    }).timeout(50000)
  
    it('Register', async ()=>{
      await driver.get('https://stage-members.mdlive.com/conehealth/new_registration?type=Customer&affiliation=conehealth')
      let familyText = await driver.findElement(By.css('#left > h4:nth-child(2)'))
      expect( await familyText.getText()).to.include('Individual and Family')
    }).timeout(50000)
  
    it('FAQs', async ()=>{
      await driver.get('https://stage-members.mdlive.com/conehealth/how_it_works')
      let faqText = await driver.findElement(By.css('div.faq:nth-child(1) > h1:nth-child(1)'))
      expect( await faqText.getText()).to.include('Frequently Asked Questions')
    }).timeout(50000)
  
    it('Contact Us', async ()=>{
      await driver.get('https://stage-members.mdlive.com/conehealth/contact_us')
      let contactUs = await driver.findElement(By.css('div.innerWidthBlock:nth-child(7) > h1:nth-child(1)'))
      expect( await contactUs.getText()).to.include('Contact Us')
    }).timeout(50000)
  })

})