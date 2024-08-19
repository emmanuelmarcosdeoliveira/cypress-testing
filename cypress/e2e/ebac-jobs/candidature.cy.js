/// <reference types="cypress" />
// Esse elemento acima, faz com que o VS code adciione os snipets para o Cypress

// Describe é a nossa suite de testes
describe("Tests para a pagina de  Candidature", () => {
  // BeforeEach() é um método que faz a com quer antes de começar os testes ele acesse a página onde o site é alocado
  beforeEach(() => {
    // cy => forma de escrita de teste no Cypress esse comando vai antes de qualquer teste feito no cypress
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });
  // it( É a forma como o  Cypress é escrito )
  it("Deve levar o canditado para o formulário de inscrição", () => {
    // .first() método para fazer a verificação no primeiro elemento, quando temos mais de um como é o caso das `li's`
    // click() é o tipo de teste que o cypress estara fazendo
    // Abaixo estamos verificando se ao dar click em essa classe estamos acessando a página de candidatura
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    // Abaixo estamos fazendo o test para verificar se na página existe 7 elementos de `input`
    cy.get("input").should("have.length", 7);
  });
  it("Deve preencher o formulário de inscrição", () => {
    // como estamos escrevendo um novo test temos que acessar o site novamente
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    // .first() método para fazer a verificação no primeiro elemento, quando temos mais de um como é o caso das `li's`
    // click() é o tipo de teste que o cypress estara fazendo
    // Abaixo estamos verificando se ao dar click em essa classe estamos acessando a página de candidatura

    cy.get(".Vaga_vagaLink__DeFkk").first().click();

    // Abaixo estamos fazendo um teste onde estamos selecionando o elenento `input` com o `type="nome-completo" e inserido um nome nesse campo de input
    cy.get('input[name="nome-completo"]').type("Emmanuel Oliveira");
    // Fazendo teste no campo de input como `name="email"`
    cy.get('input[name="email"]').type("oliveira@gmail.com");
    // Fazendo o teste no input de telefone
    cy.get('input[name="telefone"]').type("(11)-11111-1111");
    cy.get('input[name="endereco"]').type(
      "Rua Cypress, n°10 Bairro JavaScript São Paulo -SP"
    );
    // Abaixo estamos fazendo um test em um input de seect com o name="escolaridade" e usando metodo select() para selecionar uma das opçoes do select
    cy.get('select[name="escolaridade"]').select("Outros");
    // Abaixo estamos fazendo testes com em um elemento do tipo `radio`através de seu `id`
    cy.get("#linux").check();
    // Abaixo estamos vendo o test para a dar um click no botão de candidatura do Site.
    cy.get(".Aplicacao_button__tw2AE").click();
    // Abaixo estamos fazendo um test onde ele irá pegar o nosso alert como o método `cy.on` e verificar o contéudo do alert e ser corresponde a que estavamos esperando...
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });
  });
});
