import {by, element, ElementFinder} from "protractor";
import Element from "../objects/Element";
import Field from "../objects/Field";
import Button from "../objects/Button";
import Selector from "../objects/Selector";
import Dropdown from "../objects/Dropdown";

export default class NavBar {

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private COMPONENT_NAME: string = 'Navigation Bar';

    private NAV_BAR_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Container';
    private SEARCH_PAD_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Search Pad Container';
    private SEARCH_FIELD_LOGNAME: string = this.COMPONENT_NAME + ' Search Field';
    private SEARCH_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Search Button';
    private SEARCH_TYPE_SELECT_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Type Select Button';
    private SEARCH_DROPDOWN_LOGNAME: string = this.COMPONENT_NAME + ' Search Results Dropdown';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private navBarContainerLoc: string = './/*[contains(@class,\'navi__top\')]';
    private searchPadContainerLoc: string = this.navBarContainerLoc + '//form[@data-hh-tab-id=\'searchVacancy\']';
    private searchFieldLoc: string = this.searchPadContainerLoc + '//input[@type=\'text\']';
    private searchButtonLoc: string = this.searchPadContainerLoc + '//button[@type=\'submit\']';
    private searchTypeSelectButtonLoc: string = this.searchPadContainerLoc + '//select[@data-qa=\'navi-search__select\']';
    private searchDropdownLoc: string = this.searchPadContainerLoc + '/following::div[contains(@class, \'suggest\')]/ul[li[text()]]';

    private navBarContainerEl: ElementFinder = element(by.xpath(this.navBarContainerLoc));
    private searchPadContainerEl: ElementFinder = element(by.xpath(this.searchPadContainerLoc));
    private searchFieldEl: ElementFinder = element(by.xpath(this.searchFieldLoc));
    private searchButtonEl: ElementFinder = element(by.xpath(this.searchButtonLoc));
    private searchTypeSelectButtonEl: ElementFinder = element(by.xpath(this.searchTypeSelectButtonLoc));
    private searchDropdownEl: ElementFinder = element(by.xpath(this.searchDropdownLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="objects">
    public navBarContainer: Element = new Element(this.navBarContainerEl, this.NAV_BAR_CONTAINER_LOGNAME);
    public searchPadContainer: Element = new Element(this.searchPadContainerEl, this.SEARCH_PAD_CONTAINER_LOGNAME);
    public searchField: Field = new Field(this.searchFieldEl, this.SEARCH_FIELD_LOGNAME);
    public searchButton: Button = new Button(this.searchButtonEl, this.SEARCH_BUTTON_LOGNAME);
    public searchTypeSelectButton: Selector = new Selector(this.searchTypeSelectButtonEl, this.SEARCH_TYPE_SELECT_BUTTON_LOGNAME);
    public searchDropdown: Dropdown = new Dropdown(this.searchDropdownEl, this.SEARCH_DROPDOWN_LOGNAME);
    // </editor-fold>
}
