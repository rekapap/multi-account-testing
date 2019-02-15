describe('Email Submit Form', () => {
  beforeEach(()=> {
    cy.visit('https://app.perkbox.com/welcome/login')
  })

  context('Email Submission', () => {

    it('Typing Invalid Email', () => {
      const typedInvalidEmail = "notemail"

      cy.get('#login__global-login__field-email')
        .type(typedInvalidEmail)
      cy.get('#login__global-login__btn-submit').click()
      cy.get('#login__global-login__field-email__copy-error__icon-text').should('contain', 'This email address is not valid')
    })
  })

  context('Select account', () => {

    it('After submitting an email address, selecting an account the user is redirected to the account login page with prepopulated email',  () => {
      const typedValidEmail = "pooja@perkbox.co.uk"
      cy.get('#login__global-login__field-email')
        .type(typedValidEmail)
      cy.get('#login__global-login__btn-submit').click()
      cy.get('#login__global-login__tenant-select__home__tenant').click()
      cy.get('#login__global-login__tenant-select__btn-submit').click()
      cy.get("#login__default-login__field-email").should('have.value', typedValidEmail)
    })
  })
})
