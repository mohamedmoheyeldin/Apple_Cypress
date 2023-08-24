// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from "../pages/HomePage";

const home_page = new HomePage()

beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'Apple')
    cy.request("/").then((response) => {
        expect(response.status).to.eq(200)
        cy.verify_home_page_disiplay()
    })
})

Cypress.Commands.add('verify_home_page_disiplay', () => {
    home_page.apple_logo().should('be.visible')
    home_page.main_nav_bar().should('be.visible')
    home_page.footer_notes().should('be.visible')
    home_page.apple_directory_footer().should('be.visible')
    home_page.main_nav_store_link().should('be.visible').and('have.text','Store').and('have.attr', 'href','/us/shop/goto/store')
    home_page.main_nav_mac_link().should('be.visible').and('have.text','Mac').and('have.attr', 'href','/mac/')
    home_page.main_nav_ipad_link().should('be.visible').and('have.text','iPad').and('have.attr', 'href','/ipad/')
    home_page.main_nav_iphone_link().should('be.visible').and('have.text','iPhone').and('have.attr', 'href','/iphone/')
    home_page.main_nav_watch_link().should('be.visible').and('have.text','Watch').and('have.attr', 'href','/watch/')
    home_page.main_nav_vision_link().should('be.visible').and('have.text','Vision').and('have.attr', 'href','/apple-vision-pro/')
    home_page.main_nav_airpods_link().should('be.visible').and('have.text','AirPods').and('have.attr', 'href','/airpods/')
    home_page.main_nav_tv_and_home_link().should('be.visible').and('have.text','TV & Home').and('have.attr', 'href','/tv-home/')
    home_page.main_nav_entertainment_link().should('be.visible').and('have.text','Entertainment').and('have.attr', 'href','"/entertainment/')
    home_page.main_nav_accessories_link().should('be.visible').and('have.text','Accessories').and('have.attr', 'href','/us/shop/goto/buy_accessories')
    home_page.main_nav_support_link().should('be.visible').and('have.text','Support').and('have.attr', 'href','https://support.apple.com/?cid=gn-ols-home-hp-tab')
    home_page.school_offer_picture().should('be.visible').and('have.attr', 'href','/us-hed/shop/back-to-school')
    home_page.macbook_pro_picture().should('be.visible').and('have.attr', 'href','/macbook-air-13-and-15-m2/')
    home_page.iphone_picture().should('be.visible').and('have.attr', 'href','/iphone-14/')
    home_page.iphone_14_pro_picture().should('be.visible').and('have.attr', 'href','/iphone-14-pro/')
    home_page.ipad_pro_picture().should('be.visible').and('have.attr', 'href','/ipad-pro/')
    home_page.watch_series_8_picture().should('be.visible').and('have.attr', 'href','/apple-watch-series-8/')
    home_page.watch_series_8_picture().should('be.visible').and('have.attr', 'href','/apple-watch-series-8/')
    home_page.vision_pro_picture().should('be.visible').and('have.attr', 'href','/apple-vision-pro/')
    home_page.trade_in_picture().should('be.visible').and('have.attr', 'href','/us/shop/goto/trade_in')
    home_page.apple_card_picture().should('be.visible').and('have.attr', 'href','/apple-card/')
    home_page.gallery_picture().should('be.visible')
})