describe('Pruebas de API - Echo Server', () => {
  const baseUrl = 'https://echo-serv.tbxnet.com'
  const timeout = 3000 // 3 segundos

  describe('GET /v1/echo', () => {
    it('debería obtener datos con status code 200', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v1/echo`,
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
        expect(response.body).to.have.property('text')
        
        // Verificar contenido del response body
        expect(response.body.text).to.be.a('string')
        expect(response.body.text).to.equal('Hola Mundo')
      })
    })

    it('debería manejar errores cuando falta el parámetro text', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v1/echo`,
        failOnStatusCode: false
      }).then((response) => {
        // Verificar status code de error
        expect(response.status).to.equal(400)
        
        // Verificar mensaje de error
        expect(response.body).to.have.property('code', 'E400')
        expect(response.body).to.have.property('message', 'Bad Request: text is required')
      })
    })
  })

  describe('GET /v1/status', () => {
    it('debería obtener datos con status code 200', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v1/status`,
        qs: {
          format: 'json'
        },
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
        expect(response.body).to.have.property('status')
        
        // Verificar contenido del response body
        expect(response.body.status).to.be.a('string')
      })
    })

    it('debería manejar errores de red correctamente', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v1/status`,
        qs: {
          format: 'json'
        },
        failOnStatusCode: false
      }).then((response) => {
        // Verificar que la respuesta no sea 500
        expect(response.status).to.not.equal(500)
      })
    })
  })
}) 