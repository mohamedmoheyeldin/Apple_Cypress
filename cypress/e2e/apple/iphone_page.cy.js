/// <reference types="cypress" />


import IphonePage from "../../pages/IphonePage";
import HomePage from "../../pages/HomePage";

const expected_text = require('../../fixtures/expected_text.json')
const iphone_Page = new IphonePage()
const home_page = new HomePage()

context('verify main things on iphone page display', () => {


    it('verify', () => {
        iphone_Page.main_nav_iphone_link().click()
        cy.url().should('eq', 'https://www.apple.com/iphone/')
        iphone_Page.iphone_page_top_item_list().should('be.visible')
        iphone_Page.top_trade_in_offer_text().should('be.visible')
        iphone_Page.top_trade_in_offer_shop_now_link().should('be.visible').and('have.attr', 'data-analytics-title','shop iphone').and('have.attr', 'href','/us/shop/goto/buy_iphone')
        iphone_Page.which_iPhone_is_right_for_you_text().should('be.visible')

    })


})