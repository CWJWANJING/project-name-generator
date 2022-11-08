describe('The Home Page', () => {

    it('receives expected output from openai api call', () => {
        const keywords = "tea software"
        cy.request("POST", "http://localhost:3000/api/ai", {keywords: keywords} ).then(
            (response) => {
              expect(response.status).to.eq(200) 
              expect(response).to.have.property('body')
            }
          )
    })

  })