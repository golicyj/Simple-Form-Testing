describe("Form test", () => {
    
  it("Fill the form....", () => {
      
      
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
          
      
      
    cy.visit("https://example.com/contact");
    cy.get("form");
    
    cy.get('input[name="email"]')
      .type(`qabot${id}@gmail.com`)
      

    cy.get('input[name="number"]')
      .type("455 665 999")
      

    cy.get("textarea[id=input-textfield]")
      .type("Mind you if I ask some silly question? (test message)")
            
      
   cy.contains('Wyślij wiadomość').click()
  cy.contains('Wiadomość została wysłana')
    
    
    function req () {
    cy
    cy.wait(10000)
    .request('GET', `https://api.pipedrive.com/v1/deals/find?term=qabot${id}%40gmail.com&api_token=YOUR_TOKEN`).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.nested.property('data[0].id')
    
    const abc = response.body.data[0].id
   
    cy.wait(3000)
    cy.request('DELETE', `https://api.pipedrive.com/v1/deals/${abc}?api_token=YOUR_TOKEN`)
    
    
    
    })
    
}



    cy
    
    .then(req)




   })
       
    
    
  });
  
