/// <reference types="cypress" />

describe('Login and logout', () => {
	it('should open up the login page', () => {
		cy.visit('/');
	});

	it('can log in to the app', () => {
		const newItem = 'test@test.com';
		const newPassword = 'test123';

		cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`);
		cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`);
		cy.wait(500);
	});

	it('contains the welcome header', () => {
		cy.visit('/');
		cy.contains('Good');
	});

	it('should log out of the dashboard', () => {
		cy.get(`[aria-label="Account settings"]`).click();
		cy.contains('Logout').click();
	});
});
