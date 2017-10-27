require('ts-node/register'); //run ts files through node

let helpers = require('./helpers');

exports.config = {
    baseUrl: 'https://spb.hh.ru/',

    // use `npm run test`
    specs: [
        helpers.root('tests/*/*.spec.ts')
    ],

    framework: 'jasmine2',

    allScriptsTimeout: 100000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--disable-web-security',
                'show-fps-counter=true',
                '--disable-impl-side-painting'
            ]
        }
    },

    onPrepare: () => {
        browser.waitForAngularEnabled(false); // Disable waiting for Angular
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach((done) => {
            browser.takeScreenshot().then((png) => {
                allure.createAttachment('Screenshot', () => {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
};
