const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './test-report/cucumber-report',
    reportSuiteAsScenarios: true,
    launchReport: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '98.0.4758.102'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    }
});