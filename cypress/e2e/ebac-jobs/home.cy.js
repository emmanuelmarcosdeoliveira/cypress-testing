/// <reference types="cypress" />

describe("Tests for Home", () => {
  it("should render 4 vacancies", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".ListaVagas_vagas__gmNZn >  li").should("have.length", 4);
  });
  it("filter jobs by fullStaclk", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".FormVagas_campo__E1ppF").type("fullstack{enter}");
  });
  it("filter jobs by fullStaclk on Click", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".FormVagas_campo__E1ppF").type("fullstack");
    cy.get('button[type="submit"]').click();
    cy.get(".ListaVagas_vagas__gmNZn >  li").should("have.length", 1);
  });
});
