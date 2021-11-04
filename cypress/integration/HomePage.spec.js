let userData,nav,elements;

describe("Navigate to website",()=>{
    before(()=>{
        cy.visit("/demo.html")
        cy.fixture('userData.json').then((user)=>{
            userData=user
        })
        cy.fixture('nav.json').then((navElement)=>{
            nav=navElement
        })
        cy.fixture('elements.json').then((element)=>{
            elements=element
        })
        
    })

    it("Check site logo",()=>{
        cy.get('div.container div.logo img').should('be.exist')      
    })
    it("Verify phone and email",()=>{
        cy.get('ul.phone_email').children('li').then(()=>{
            cy.get('li').eq(0).contains(userData.phone_number)
            cy.get('li').eq(1).contains(userData.email)
        
        })
    })

    it("Verify Navigation elements",()=>{
        cy.get('#main-nav #toggleNav').children('li').each(($li,index,$list)=>{
            cy.get('a').contains(nav[index])
            
        })
    })

    it("Verify all the elements inside Interaction",()=>{
        cy.get('div.linkbox').eq(0).within(()=>{
            cy.get('h1').contains('Interaction')
            cy.get('ul').children('li').each(($li,index,$list)=>{
                cy.get('a').contains(elements[0].element[index])
               
           })
        })
        
    })

    // it("Verify elements in interaction",()=>{

    // })
})