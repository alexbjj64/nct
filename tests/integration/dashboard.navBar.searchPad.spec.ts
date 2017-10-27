import Dashboard from "../common/pages/Dashboard";

let dashboard: Dashboard = new Dashboard();
let isPageOpened = false;
let data = require('../test_data/data.json')['dashboard.navBar.searchPad.spec'];

const DEFAULT_SEARCH_TYPE = data['DEFAULT_SEARCH_TYPE'];
const DEFAULT_PLACEHOLDER = data['DEFAULT_PLACEHOLDER'];


describe('Dashboard page. Navigation bar. Search pad:', () => {
    beforeEach(() => {   //cannot use beforeAll due to allure issue
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            isPageOpened = true;
        }
    });

    it('should be visible nav bar container', () => {
        dashboard.navBar.navBarContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search pad container', () => {
        dashboard.navBar.searchPadContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsVisible();
    });

    it('should be empty nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsEmpty();
    });

    it('should be expected placeholder in nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsCorrectPlaceholder(DEFAULT_PLACEHOLDER);
    });

    it('should be visible nav bar`s search button', () => {
        dashboard.navBar.searchButton.expectIsVisible();
    });

    it('should be visible nav bar`s search type select button', () => {
        dashboard.navBar.searchTypeSelectButton.expectIsVisible();
    });

    it('should be expected default value text of nav bar`s search type select button', () => {
        dashboard.navBar.searchTypeSelectButton.expectIsSelectedValueCorrect(DEFAULT_SEARCH_TYPE);
    });
});
