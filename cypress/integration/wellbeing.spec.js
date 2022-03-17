/// <reference types="cypress" />

context('Wellbeing', () => {
	it('should open up the login page', () => {
		cy.visit('/');
	});

	it('can log in to the app', () => {
		const newItem = 'test@test.com';
		const newPassword = 'test123';

		cy.get('[data-test=loginEmail]').type(`${newItem}{enter}`);
		cy.get('[data-test=loginPassword]').type(`${newPassword}{enter}`);
	});

	it('can visit the wellbeing page', () => {
		cy.get(`[href="/wellbeing"]`).click();
		cy.location('pathname').should('include', 'wellbeing');
	});

	it('contains the wellbeing header', () => {
		cy.get(`[class="header wellbeing-header"]`);
	});

	it('contains the calendar', () => {
		cy.contains('What day are you planning?');
	});

	it('displays the activity buttons', () => {
		cy.contains('Yoga');
		cy.contains('Meditation');
		cy.contains('Call a Friend');
		cy.contains('Gardening');
		cy.contains('Go Outside');
		cy.contains('Read a Book');
	});

	it('can click the Meditation activity', () => {
		cy.contains('Meditation').click();
	});

	it('displays the time buttons', () => {
		cy.contains('15 mins');
		cy.contains('30 mins');
		cy.contains('45 mins');
		cy.contains('1 hour');
	});

	it('can click 1 hour', () => {
		cy.contains('45 mins').click();
		cy.wait(2000);
	});

	it('displays the dashboard', () => {
		cy.contains('Good');
	});

	it('the dashboard displays the added activity', () => {
		cy.contains('Meditation - 45 mins');
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
