describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the header', () => {
    cy.get('h3')
    .contains('OUR TEAM');
  })
  it('renders a user contact', () => {
    cy.get('contact__card')
    .should('be.visible')
  })
})
