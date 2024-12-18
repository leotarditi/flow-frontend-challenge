describe('weather', () => {
  it('show the correct weather for Quilmes', () => {
    cy.fixture("weather.json").then((fixture) => {
      cy.visit('/')
      cy.intercept('**/forecast**', {fixture: "weather.json"})
  
      cy.get("select").should("have.value", "quilmes");
      cy.get("h1").should("have.text", fixture.city.name);
      cy.get("ul > li:first-of-type").should("have.text", "18/12/2024: Min: 24°C, Max: 26°C");
    })
  })
})