/// <reference types="cypress" />

describe("Tests for Home", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });
  it("should render 4 vacancies", () => {
    cy.get(".ListaVagas_vagas__gmNZn >  li").should("have.length", 4);
  });
  it("filter jobs by fullStaclk", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack{enter}");
  });
  it("filter jobs by fullStaclk on Click", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack");
    cy.get('button[type="submit"]').click();
    cy.get(".ListaVagas_vagas__gmNZn >  li").should("have.length", 1);
  });
});
