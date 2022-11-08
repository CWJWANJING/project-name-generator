describe("The Home Page UIs", () => {
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
    cy.get(".description").contains(
      "Please enter tags below to generate project names."
    );
  });

  it("should have input box for adding tags", () => {
    cy.get("input").should("have.id", "addTag");
    cy.get("#addTag").should("have.a.property", "text");
  });

  it("should have a button for submit tags", () => {
    cy.get("#Add").type("submit");
    cy.get("#Add").should("have.value", "Add");
  });

  it("should contains the Tags section title", () => {
    cy.get("p").contains("Tags");
  });

  it("should have display box for all the tags", () => {
    cy.get(".tags").should("be.visible");
  });

  it("should have a submit button for calling the API", () => {
    cy.get("#Generate").should("have.value", "Generate");
  });

  it("should have a window for displaying the results of generated names", () => {
    cy.get(".results").should("be.visible");
  });

  it("should contains the Results section title", () => {
    cy.get("p").contains("Results");
  });
});

describe("The Home Page doing work", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to add new tags", () => {
    cy.get("#addTag").type("tea");
    cy.get("#Add").click();

    cy.get(".tags").should('have.text', "tea ");
  });
});
