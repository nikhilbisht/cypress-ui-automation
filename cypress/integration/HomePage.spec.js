let userData,nav;

describe("Navigate to website",()=>{
    before(()=>{
        cy.visit("/demo.html")
        cy.fixture('userData.json').then((user)=>{
            userData=user
        })
        cy.fixture('nav.json').then((navElement)=>{
            nav=navElement
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
            cy.get('a').contains(nav[index]["heading"])
            
        })
    })

    it("Verify all the elements inside Interaction",()=>{
        cy.get('div.linkbox').eq(0).within(()=>{
            cy.get('h1').contains(nav[1]["heading"])
            cy.get('ul').children('li').each(($li,index,$list)=>{
                cy.get('a').contains(nav[1].element[index])
               
           })
        })
        
    })

    it("Verify elements of Interaction(navigation panel)",()=>{
        cy.get('#toggleNav').children('li').find('a').contains('Interaction').trigger('mouseover').then(()=>{
            cy.get('#toggleNav>li').eq(1).within(()=>{
                cy.get('ul').children('li').each(($li, index,$list)=>{
                    cy.get('a').contains(nav[1].element[index])
                })
            })

        })
    })
})