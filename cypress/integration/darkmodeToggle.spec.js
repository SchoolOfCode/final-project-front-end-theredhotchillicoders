/// <reference types="cypress" />

describe('Login and logout', () => {
    it('should open up the login page', () => {
        cy.visit('/')
    })

    it('can log in to the app', () => {
        const newItem = 'test@test.com'
        const newPassword = 'test123'

        cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`)
        cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`)
        cy.wait(500)
    })

    it('contains the welcome header', () => {
        cy.visit('/')
        cy.contains('Hello')
        cy.wait(500)
    })

    it('contains the dark mode toggle', () => {
        cy.get('svg[data-testid="LightModeIcon"]')
    })

    it('toggles to dark mode', () => {
        cy.get('svg[data-testid="LightModeIcon"]').click()
    })

    it('contains the light mode toggle', () => {
        cy.get('svg[data-testid="ModeNightIcon"]')
    })

    it('toggles to light mode', () => {
        cy.get('svg[data-testid="ModeNightIcon"]').click()
    })

    it('should log out of the dashboard', () => {
        cy.get(`[aria-label="Account settings"]`).click()
        cy.contains('Logout').click()
    })
})