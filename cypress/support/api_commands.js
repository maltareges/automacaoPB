//api List Users

Cypress.Commands.add('listUsers', () => {
  const listUsers = () => {
      cy.api({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/users',
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body).is.not.empty
          expect(response.body[0]).to.have.property('id',1)
          expect(response.body[0]).to.have.property('email','Sincere@april.biz')
          expect(response.body[0]).to.have.property('name','Leanne Graham')
        })
  }
  listUsers()       
})

//Create User

Cypress.Commands.add('createUser', () => {
  const createUser = () => {
      cy.api({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          body: {
                 name: 'Rafael Malta',
                 username: 'rafael',
                 email: 'teste@april.biz',
                 address: {
                     street: 'teste Light',
                     suite: 'Apt. 209',
                     city: 'Gwenborough',
                     zipcode: '92998-3874',
                     geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                     }
                 },
                 phone: '6688774888',
                 website: 'teste.org',
                 company: {
                     name: 'teste-Crona',
                     catchPhrase: 'Multi-layered client-server neural-net',
                     bs: 'harness real-time e-markets'
                  }
    },
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(201)
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('name','Rafael Malta')
          expect(response.body).to.have.property('username','rafael')
        })  
  }
  createUser()       
})

//Update User

Cypress.Commands.add('updateUser', () => {
  const updateUser = () => {
      cy.api({
          method: 'PUT',
          url: 'http://jsonplaceholder.typicode.com/users/1',
          body: { 
                 name: 'Rafael Reges',
                 username: 'boss'
                },
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('name','Rafael Reges')
          expect(response.body).to.have.property('username','boss')
        })  
  }
  updateUser()       
})


//API Delete Single User

Cypress.Commands.add('deleteSigleUser', () => {
const deleteSigleUser = () => {
    cy.api({
        method: 'DELETE',
        url: 'http://jsonplaceholder.typicode.com/users/1',

        failOnStatusCode: false
    }).as('response')
      cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200)
      })  
}
deleteSigleUser()       
})
