/// <reference types="cypress" />

context('Navigation', () => {
	it('should open up the login page', () => {
		cy.visit('/');
	});

	it('can log in to the app', () => {
		const newItem = 'test@test.com';
		const newPassword = 'test123';

		cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`);
		cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`);
	});

	it('can visit the fitness page', () => {
		cy.get(`[href="/fitness"]`).click();
		cy.location('pathname').should('include', 'fitness');
	});

	it('can visit the recipes page', () => {
		cy.get(`[href="/recipes"]`).click();
		cy.location('pathname').should('include', 'recipes');
	});

	it('can visit the goals page', () => {
		cy.get(`[href="/goals"]`).click();
		cy.location('pathname').should('include', 'goals');
	});

	it('can visit the wellbeing page', () => {
		cy.get(`[href="/wellbeing"]`).click();
		cy.location('pathname').should('include', 'wellbeing');
	});

	it('can visit the progress page', () => {
		cy.get(`[aria-label="Account settings"]`).click();
		cy.get(`[href="/progress"]`).click();
		cy.location('pathname').should('include', 'progress');
	});

	it('can log out', () => {
		cy.visit('/');
		cy.get(`[aria-label="Account settings"]`).click();
		cy.contains('Logout').click();
	});
});
