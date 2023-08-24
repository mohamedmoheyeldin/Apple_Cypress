/// <reference types="cypress" />

class HomePage {

    apple_logo(){
        return cy.get('.globalnav-link.globalnav-link-apple')
    }

    main_nav_bar(){
        return cy.get('nav#globalnav')
    }

    apple_directory_footer(){
        return cy.get('[aria-label="Apple Directory"]')
    }

    footer_notes(){
        return cy.get('[aria-label="Footnotes"]')
    }

    main_nav_store_link(){
        return cy.get('.globalnav-link.globalnav-link-store.globalnav-submenu-trigger-link')
    }

    main_nav_mac_link(){
        return cy.get('.globalnav-link.globalnav-link-mac.globalnav-submenu-trigger-link')
    }

    main_nav_ipad_link(){
        return cy.get('.globalnav-link.globalnav-link-ipad.globalnav-submenu-trigger-link')
    }

    main_nav_iphone_link(){
        return cy.get('.globalnav-link.globalnav-link-iphone.globalnav-submenu-trigger-link')
    }

    main_nav_watch_link(){
        return cy.get('.globalnav-link.globalnav-link-watch.globalnav-submenu-trigger-link')
    }

    main_nav_vision_link(){
        return cy.get('.globalnav-link.globalnav-link-vision.globalnav-submenu-trigger-link')
    }

    main_nav_airpods_link(){
        return cy.get('.globalnav-link.globalnav-link-airpods.globalnav-submenu-trigger-link')
    }

    main_nav_tv_and_home_link(){
        return cy.get('.globalnav-link.globalnav-link-tv-home.globalnav-submenu-trigger-link')
    }
    main_nav_entertainment_link(){
        return cy.get('#globalnav-list > li.globalnav-item.globalnav-menu > div > div > div.globalnav-item.globalnav-item-entertainment.globalnav-item-menu.globalnav-item-submenu > ul > li:nth-child(1) > a')
    }
    main_nav_accessories_link(){
        return cy.get('.globalnav-link.globalnav-link-accessories.globalnav-submenu-trigger-link')
    }
    main_nav_support_link(){
        return cy.get('.globalnav-link-support')
    }


    school_offer_picture(){
        return cy.get('[data-unit-id=\'back-to-school-2023\'] .unit-wrapper > [target]')
    }

    macbook_pro_picture(){
        return cy.get('.unit-wrapper.unit-wrapper-reset > .unit-link')
    }

    iphone_picture(){
        return cy.get('.unit-wrapper.yellow > .unit-link')
    }

    iphone_14_pro_picture(){
        return cy.get('[data-unit-id=\'iphone-14-pro\'] .unit-wrapper > [target]')
    }

    ipad_pro_picture(){
        return cy.get('.refresh.theme-dark.unit-wrapper > .unit-link')
    }

    watch_series_8_picture(){
        return cy.get('[data-unit-id=\'apple-watch-series-8\'] .unit-wrapper > [target]')
    }

    vision_pro_picture(){
        return cy.get('.bottom-copy-wrapper.unit-wrapper > .unit-link')
    }

    trade_in_picture(){
        return cy.get('[data-unit-id=\'iphone-tradein\'] .unit-wrapper > [target]')
    }

    apple_card_picture(){
        return cy.get('.background.unit-wrapper > .unit-link')
    }

    apple_card_picture(){
        return cy.get('.background.unit-wrapper > .unit-link')
    }

    gallery_picture(){
        return cy.get('div#tv-plus-gallery')
    }

}

export default HomePage