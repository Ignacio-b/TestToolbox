describe('Pruebas de API - Echo Server', () => {
  const baseUrl = 'https://httpbin.org'
  const timeout = 3000 // 3 segundos

  describe('GET /get', () => {
    it('debería obtener datos con status code 200', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/get`,
        qs: {
          text: 'Hola Mundo'
        }
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.equal(200)
        
        // Verificar tiempo de respuesta
        expect(response.duration).to.be.lessThan(timeout)
        
        // Verificar headers
        expect(response.headers).to.have.property('content-type')
        expect(response.headers['content-type']).to.include('application/json')
        
        // Verificar estructura del response body
        expect(response.body).to.be.an('object')
        expect(response.body).to.have.property('args')
        expect(response.body).to.have.property('headers')
        expect(response.body).to.have.property('url')
        
        // Verificar contenido del response body
        expect(response.body.args).to.be.an('object')
        expect(response.body.args).to.have.property('text', 'Hola Mundo')
        expect(response.body.headers).to.be.an('object')
        expect(response.body.headers).to.have.property('User-Agent')
        expect(response.body.headers).to.have.property('Accept')
        expect(response.body.url).to.include('/get')
      })
    })

    it('debería manejar errores cuando falta el parámetro text', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/get`,
        failOnStatusCode: false
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.equal(200)
        
        // Verificar que args está vacío
        expect(response.body.args).to.be.an('object')
        expect(response.body.args).to.be.empty
      })
    })
  })

  describe('GET /anything', () => {
    it('debería obtener datos con status code 200', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/anything`,
        failOnStatusCode: false
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.equal(200)
        
        // Verificar tiempo de respuesta
        expect(response.duration).to.be.lessThan(timeout)
        
        // Verificar headers
        expect(response.headers).to.have.property('content-type')
        expect(response.headers['content-type']).to.include('application/json')
        
        // Verificar estructura del response body
        expect(response.body).to.be.an('object')
        expect(response.body).to.have.property('args')
        expect(response.body).to.have.property('headers')
        expect(response.body).to.have.property('url')
        
        // Verificar contenido del response body
        expect(response.body.args).to.be.an('object')
        expect(response.body.headers).to.be.an('object')
        expect(response.body.headers).to.have.property('User-Agent')
        expect(response.body.headers).to.have.property('Accept')
        expect(response.body.url).to.include('/anything')
      })
    })

    it('debería manejar errores de red correctamente', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/anything`,
        failOnStatusCode: false
      }).then((response) => {
        // Verificar que la respuesta no sea 500
        expect(response.status).to.not.equal(500)
      })
    })
  })
}) 