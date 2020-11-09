var webdriver = require('selenium-webdriver')
const { expect } = require('chai');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

describe("first test", ()=>{

//   before(function(){

//     console.log("im working")
    

// });

  it('1-should console log Google title', ()=>{
    driver.get('http://www.google.com')
    driver.getTitle().then((title)=>{
      console.log('***', title)
      expect(title).to.equal('asdfasdf')
    })

  })

  it('2-should console log Google title', ()=>{
    driver.get('http://www.google.com')
    driver.getTitle().then((title)=>{
      console.log('***', title)
      expect(title).to.equal('Google')
    })
    driver.quit()
  })
  // driver.quit()
})