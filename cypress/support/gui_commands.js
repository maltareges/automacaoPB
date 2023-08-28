
/*Click on blue button*/
Cypress.Commands.add('clickBlueButton', () => {
    const clickBlueButton = () => {
        cy.visit('/challenging_dom')
        cy.get('[class="button"]').click()
        cy.wait(2000)
        cy.get('#canvas').should('be.visible')       
    }
    clickBlueButton()       
})

/*Click on red button*/
Cypress.Commands.add('clickRedButton', () => {
    const clickRedButton = () => {
        cy.visit('/challenging_dom')
        cy.get('[class="button alert"]').click()
        cy.wait(2000)
        cy.get('#canvas').should('be.visible')       
    }
    clickRedButton()       
})

/*Click on green button*/
Cypress.Commands.add('clickGreenButton', () => {
    const clickGreenButton = () => {
        cy.visit('/challenging_dom')
        cy.get('[class="button success"]').click()
        cy.wait(2000)
        cy.get('#canvas').should('be.visible')       
    }
    clickGreenButton()       
})

/*Click on all "Edit" and "Delete" Buttons*/
Cypress.Commands.add('clickAllButton', () => {
    const clickAllButton = () => {
        cy.visit('/challenging_dom')
        cy.get('tbody tr').should('have.length',10)
        cy.get('tr:nth-child(1)').contains('edit').click()
        cy.get('tr:nth-child(1)').contains('delete').click()   
        cy.get('tr:nth-child(2)').contains('edit').click()
        cy.get('tr:nth-child(2)').contains('delete').click()
        cy.get('tr:nth-child(3)').contains('edit').click()
        cy.get('tr:nth-child(3)').contains('delete').click()  
        cy.get('tr:nth-child(4)').contains('edit').click()
        cy.get('tr:nth-child(4)').contains('delete').click() 
        cy.get('tr:nth-child(5)').contains('edit').click()
        cy.get('tr:nth-child(5)').contains('delete').click() 
        cy.get('tr:nth-child(6)').contains('edit').click()
        cy.get('tr:nth-child(6)').contains('delete').click() 
        cy.get('tr:nth-child(7)').contains('edit').click()
        cy.get('tr:nth-child(7)').contains('delete').click() 
        cy.get('tr:nth-child(8)').contains('edit').click()
        cy.get('tr:nth-child(8)').contains('delete').click()
        cy.get('tr:nth-child(9)').contains('edit').click()
        cy.get('tr:nth-child(9)').contains('delete').click()
        cy.get('tr:nth-child(10)').contains('edit').click()
        cy.get('tr:nth-child(10)').contains('delete').click() 
    }
    clickAllButton()       
})


