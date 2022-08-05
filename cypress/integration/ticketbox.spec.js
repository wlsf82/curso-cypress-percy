describe('Ticketbox', ()=>{

    beforeEach(() =>{
        cy.visit("index.html")
    })
    
    it("Check for the initial state",()=>{
        
        cy.percySnapshot();
    })

    it("Checks for invalid email", ()=>{
        cy.get('#email').type('joao-exemplo.com');
        cy.percySnapshot();
    })
    
    it("Enables submission after all mandatory fields are filed", ()=>{
       cy.fillMandatoryFields()
        cy.percySnapshot();
    })

    it("Updates agreement base on fill name, tickets quantity, and type", ()=>{
        cy.get('#first-name').type('joao');
        cy.get('#first-name').type('silva');
        cy.get('#ticket-quantity').select('4');
        cy.get('#vip').check();
        cy.percySnapshot();
    })

    const succesfulFormSubmission = "Shows a succes message after form submission"
    it("Shows a succes message after form submission", ()=>{
            cy.fillMandatoryFields();
            cy.contains('Confirm Tickets').click({force:true});
            cy.percySnapshot(succesfulFormSubmission, 
            {
                percyCSS:`.succes span { display: none}`
            }
        );
    })
})