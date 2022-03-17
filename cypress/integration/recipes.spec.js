/// <reference types="cypress" />

context('Recipes', () => {
	it('should open up the login page', () => {
		cy.visit('/');
	});

	it('can log in to the app', () => {
		const newItem = 'test@test.com';
		const newPassword = 'test123';

		cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`);
		cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`);
	});

	it('can visit the recipes page', () => {
		cy.get(`[href="/recipes"]`).click();
		cy.location('pathname').should('include', 'recipes');
	});

	it('contains the recipes header', () => {
		cy.get(`[class="header recipe-header"]`);
	});

	it('contains the calendar', () => {
		cy.contains('What day are you planning?');
	});

	it('searches for a recipe', () => {
		const search = 'cake';
		cy.get(`[placeholder="Search for a recipe"]`).type(`${search}{enter}`);
		cy.wait(1000);
	});

	it('can click the caramel cake recipe', () => {
		cy.get(`[data-testid=recipeTitle]`).contains('Caramel Cake').children('.recipeCard_addButton*').click();
		cy.wait(1000);
	});

	it('displays the dashboard', () => {
		cy.contains('Good');
	});

	it('the dashboard displays the added activity', () => {
		cy.contains('Caramel Cake');
	});

	it('deletes the added activity', () => {
		cy.get(`[aria-label="delete"]`).click();
	});

	it('displays the random quote', () => {
		cy.get('h3[class*="RandomQuote"]').click();
	});

	it('should log out of the dashboard', () => {
		cy.get(`[aria-label="Account settings"]`).click();
		cy.contains('Logout').click();
	});
});
