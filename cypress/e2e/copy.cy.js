const { default: MailSlurp } = require("mailslurp-client");

describe('template spec', () => {
    it('should visit the website', () => {
      cy.visit("https://me.geegpay.africa/");
      cy.get('h5 > a > .rn-btn').click()
      cy.get('#freelancer > .radio__wrapper > .radio__input').click()
      cy.get('.rn-btn').click()
      cy.get('.css-1ck9af0 > .rn-space > div > .rn-input__field').type("ukomfonmamonday@gmail.com")
      cy.get('.css-hi193p > .rn-space > div > .rn-input__field').type("12345")
      cy.get('.rn-btn').click()
      cy.get('.form__fields--token > :nth-child(1)').type("9")
      cy.get('.form__fields--token > :nth-child(2)').type("3")
      cy.get('.form__fields--token > :nth-child(3)').type("0")
      cy.get('.form__fields--token > :nth-child(4)').type("1")
      cy.get('.form__fields--token > :nth-child(5)').type("0")
      cy.get('.form__fields--token > :nth-child(6)').type("1")
      
 
  
  })

})



