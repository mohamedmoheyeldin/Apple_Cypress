const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportPageTitle: 'Apple Cypress Automation Report',
            charts: true,
            quiet: false,
            showPassed: true,
            showFailed: true,
            showSkipped: true,
            inlineAssets: true,
            saveAllAttempts: true,
            showTestDuration: true,
            embeddedScreenshots: true
        },

        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://www.apple.com/',
        viewportHeight: 1080,
        viewportWidth: 1920,
        retries: 1,
        experimentalWebKitSupport: true,
        experimentalRunAllSpecs: true,
        experimentalStudio: true,
        includeShadowDom: true,

    },
});