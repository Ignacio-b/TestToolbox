describe('Autenticación', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería registrar un nuevo usuario exitosamente', () => {
    const email = `test${Date.now()}@example.com`
    const password = 'Test123!'
    const name = 'Test User'

    cy.register(name, email, password)

    // Verificar que el registro fue exitoso
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    
    // Verificar que el usuario está logueado
    cy.get('a[href="/delete_account"]').should('be.visible')
  })

  it('debería hacer login exitosamente', () => {
    // Primero registramos un usuario
    const email = `test${Date.now()}@example.com`
    const password = 'Test123!'
    const name = 'Test User'

    cy.register(name, email, password)
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    
    // Hacemos logout
    cy.get('a[href="/logout"]').click()
    
    // Ahora intentamos hacer login con las mismas credenciales
    cy.login(email, password)

    // Verificar que el login fue exitoso
    cy.get('a[href="/delete_account"]').should('be.visible')
  })

  it('debería mostrar error con credenciales inválidas', () => {
    const email = 'invalid@example.com'
    const password = 'wrongpassword'

    cy.login(email, password)

    // Verificar mensaje de error
    cy.get('.login-form').should('contain', 'Your email or password is incorrect!')
  })
}) 