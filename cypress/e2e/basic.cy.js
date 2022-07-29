describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the header', () => {
    cy.get('h3')
    .contains('Our Team');
  })
})
