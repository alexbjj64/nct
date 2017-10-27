import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import ElementsList from "../objects/ElementsList";

export default class EmployersListTable {

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private COMPONENT_NAME: string = 'Employers List Table';

    private EMPLOYERS_LIST_TABLE_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Container';
    private EMPLOYERS_LIST_LOGNAME: string = this.COMPONENT_NAME;
    private EMPLOYERS_LIST_ELEMENTS_LOGNAME: string = this.COMPONENT_NAME + ' Elements';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private employersListTableContainerLoc: string = './/*[@class=\'l-nopaddings\']';
    private employersListLoc: string = this.employersListTableContainerLoc + '//tr';
    private employersListElementsLoc: string = this.employersListLoc + '//a';

    private employersListTableContainerEl: ElementFinder = element(by.xpath(this.employersListTableContainerLoc));
    private employersListEl: ElementFinder = element(by.xpath(this.employersListLoc));
    private employersListElementsEl: ElementArrayFinder = element.all(by.xpath(this.employersListElementsLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="objects">
    public employersListTableContainer: Element = new Element(this.employersListTableContainerEl, this.EMPLOYERS_LIST_TABLE_CONTAINER_LOGNAME);
    public employersList: Element = new Element(this.employersListEl, this.EMPLOYERS_LIST_LOGNAME);
    public employersListElements: ElementsList = new ElementsList(this.employersListElementsEl, this.EMPLOYERS_LIST_ELEMENTS_LOGNAME);
    // </editor-fold>
}
