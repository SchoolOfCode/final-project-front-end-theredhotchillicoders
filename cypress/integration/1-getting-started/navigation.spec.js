/// <reference types="cypress" />

describe('Navigation', () => {
    it('should open up the login page', () => {
        cy.visit('/')
    })

    it('can log in to the app', () => {
        const newItem = 'test@test.com'
        const newPassword = 'test123'

        cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`)
        cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`)
        cy.contains('Hello')
    })

    it('should log out of the dashboard', () => {
        cy.get(`[aria-label="Account settings"]`).click()
        cy.contains('Logout').click()
    })
})
