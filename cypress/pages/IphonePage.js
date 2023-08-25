/// <reference types="cypress" />



class IphonePage {

    iphone_page_top_item_list(){
        return cy.get('.chapternav-items')
    }

    main_nav_iphone_link(){
        return cy.get('.globalnav-link-iphone')
    }


    top_trade_in_offer_text(){
        return cy.get('.typography-ribbon [data-tradein-hide-all]')
    }

    top_trade_in_offer_shop_now_link(){
        return cy.get('.typography-ribbon [data-analytics-title]')
    }

    which_iPhone_is_right_for_you_text(){
        return cy.get('[role] [data-component-list=\'ProgressiveImageLoader\']:nth-child(6) .typography-headline')
    }


}

export default IphonePage