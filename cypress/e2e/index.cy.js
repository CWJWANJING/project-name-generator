describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contains website title", () => {
    cy.get("Head").contains("Project Name Generator");
  });

  it("should contains h1", () => {
    cy.get(".title").contains("Project Name Generator");
  });

  it("should contains the description", () => {
    cy.get(".description").contains("Please enter tags below to generate project names.");
  });

  it("should have input box for adding tags", () => {
    cy.get('input').should('have.id', 'addTag');
    cy.get('#addTag').type('text');
  });

  it("should have input box for submit tags", () => {
    cy.get('#Add').type('submit');
    cy.get('#Add').should('have.value', "Add");
  });
});
