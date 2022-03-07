/// <reference types="cypress" />

context('Navigation', () => {
    it('should open up the login page', () => {
        cy.visit('/')
    })

    it('can log in to the app', () => {
        const newItem = 'test@test.com'
        const newPassword = 'test123'

        cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`)
        cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`)
    })

    it('can visit the fitness page', () => {
        cy.get(`[href="/fitness"]`).click()
        cy.location('pathname').should('include', 'fitness')
    })

    it('contains the fitness header', () => {
        cy.contains('Fitness')
    })

    it('contains the calendar', () => {
        cy.contains('What day are you planning?')
    })

    it('displays the activity buttons', () => {
        cy.contains('Running')
        cy.contains('Weights')
        cy.contains('Crunches')
        cy.contains('Skipping')
        cy.contains('Cycling')
        cy.contains('Swimming')
    })

    it('can click the running activity', () => {
        cy.contains('Running').click()
    })

    it('displays the time buttons', () => {
        cy.contains('15 mins')
        cy.contains('30 mins')
        cy.contains('45 mins')
        cy.contains('1 hour')
    })

    it('can click 1 hour', () => {
        cy.contains('1 hour').click()
        cy.wait(2000)
    })

    it('displays the dashboard', () => {
        cy.contains('Hello')
    })

    it('the dashboard displays the added activity', () => {
        cy.contains('Running - 1 hour')
    })

    it('deletes the added activity', () => {
        cy.get(`[aria-label="delete"]`).click()
    })

    it('displays the random quote', () => {
        cy.get('h3[class*="RandomQuote"]').click()
    })

    it('should log out of the dashboard', () => {
        cy.get(`[aria-label="Account settings"]`).click()
        cy.contains('Logout').click()
    })
})
