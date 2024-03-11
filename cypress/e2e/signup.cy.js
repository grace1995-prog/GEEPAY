const { default: MailSlurp } = require("mailslurp-client");

describe('template spec', () => {
    it('should visit the website', () => {
      cy.visit("https://me.geegpay.africa/");
      cy.get('h5 > a > .rn-btn').click()
      cy.get('#freelancer > .radio__wrapper > .radio__input').click()
      cy.get('.rn-btn').click()
      cy.mailslurp()
      .then(mailslurp => mailslurp.createInbox())
      .then (inbox =>{
        inboxId=inbox.id
        emailAddress = inbox.emailAddress
        cy.get(data.bizemailfield).should('exist').type(emailAddress)
      })
    
      it('should insert code', () => {
        cy.mailslurp()
        .then(mailslurp => mailslurp.waitForLatestEmail(inboxId,30000,true))
        .then (email =>{
          emailBody = email.body
          const parser = new DOMParser()
          const doc = parser.parseFromString( emailBody,'text/html')
          var otp = doc.querySelector()
          otpCode = otp.trim()
        })
          cy.get(data.otpField).each(($el,index)=>{
          cy.wrap($el).should('exist').type(otpCode[index])
          cy.get('.css-1ck9af0 > .rn-space > div > .rn-input__field').type("ukomfonmamonday@gmail.com")
          cy.get('.css-hi193p > .rn-space > div > .rn-input__field').type()
          cy.get('.rn-btn').click()
 
    })
  
  })

})

})

