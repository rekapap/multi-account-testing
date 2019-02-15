describe('Email Submit Form', () => {
  beforeEach(()=> {
    cy.visit('https://app.perkbox.com/welcome/login')
  })

  context('Email Submission', () => {

    beforeEach(() => {
      cy.server()
    })

    it('Typing Invalid Email', () => {
      const typedInvalidEmail = "notemail"

      cy.get('#login__global-login__field-email')
        .type(typedInvalidEmail)
      cy.get('#login__global-login__btn-submit').click()
      cy.get('#login__global-login__field-email__copy-error__icon-text').should('contain', 'This email address is not valid')
    })
  })
})
