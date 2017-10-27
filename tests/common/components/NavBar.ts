import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import Field from "../objects/Field";
import Button from "../objects/Button";
import Selector from "../objects/Selector";
import ElementsList from "../objects/ElementsList";

export default class NavBar {

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private COMPONENT_NAME: string = 'Navigation Bar';

    private NAV_BAR_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Container';
    private SEARCH_PAD_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Search Pad Container';
    private SEARCH_FIELD_LOGNAME: string = this.COMPONENT_NAME + ' Search Field';
    private SEARCH_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Search Button';
    private SEARCH_TYPE_SELECT_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Type Select Button';
    private SEARCH_DROPDOWN_LOGNAME: string = this.COMPONENT_NAME + ' Search Results Dropdown';
    private SEARCH_SELECT_OPTIONS_LOGNAME: string = this.COMPONENT_NAME + ' Search Select Options';
    private SEARCH_DROPDOWN_ELEMENTS_LOGNAME: string = this.COMPONENT_NAME + ' Search Results Dropdown Elements';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private navBarContainerLoc: string = './/*[contains(@class,\'navi__top\')]';
    private searchPadContainerLoc: string = this.navBarContainerLoc + '//div[contains(@class, \'navi-cell_search\')]/form[not(contains(@class, \'g-hidden\'))]';
    private searchFieldLoc: string = this.searchPadContainerLoc + '//input[@type=\'text\']';
    private searchButtonLoc: string = this.searchPadContainerLoc + '//button[@type=\'submit\']';
    private searchTypeSelectButtonLoc: string = this.searchPadContainerLoc + '//select[@data-qa=\'navi-search__select\']';
    private searchSelectOptionsLoc: string = this.searchTypeSelectButtonLoc + '/option';
    private searchDropdownLoc: string = this.searchPadContainerLoc + '/following::div[contains(@class, \'suggest\')]/ul[li[text()]]';
    private searchDropdownElementsLoc: string = this.searchDropdownLoc + '/child::*';

    private navBarContainerEl: ElementFinder = element(by.xpath(this.navBarContainerLoc));
    private searchPadContainerEl: ElementFinder = element(by.xpath(this.searchPadContainerLoc));
    private searchFieldEl: ElementFinder = element(by.xpath(this.searchFieldLoc));
    private searchButtonEl: ElementFinder = element(by.xpath(this.searchButtonLoc));
    private searchTypeSelectButtonEl: ElementFinder = element(by.xpath(this.searchTypeSelectButtonLoc));
    private searchSelectOptionsEl: ElementArrayFinder = element.all(by.xpath(this.searchSelectOptionsLoc));
    private searchDropdownEl: ElementFinder = element(by.xpath(this.searchDropdownLoc));
    private searchDropdownElementsEl: ElementArrayFinder = element.all(by.xpath(this.searchDropdownElementsLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="objects">
    public navBarContainer: Element = new Element(this.navBarContainerEl, this.NAV_BAR_CONTAINER_LOGNAME);
    public searchPadContainer: Element = new Element(this.searchPadContainerEl, this.SEARCH_PAD_CONTAINER_LOGNAME);
    public searchField: Field = new Field(this.searchFieldEl, this.SEARCH_FIELD_LOGNAME);
    public searchButton: Button = new Button(this.searchButtonEl, this.SEARCH_BUTTON_LOGNAME);
    public searchTypeSelectButton: Selector = new Selector(this.searchTypeSelectButtonEl, this.SEARCH_TYPE_SELECT_BUTTON_LOGNAME);
    public searchSelectOptions: ElementsList = new ElementsList(this.searchSelectOptionsEl, this.SEARCH_SELECT_OPTIONS_LOGNAME);
    public searchDropdown: Element = new Element(this.searchDropdownEl, this.SEARCH_DROPDOWN_LOGNAME);
    public searchDropdownElements: ElementsList = new ElementsList(this.searchDropdownElementsEl, this.SEARCH_DROPDOWN_ELEMENTS_LOGNAME);
    // </editor-fold>
}
