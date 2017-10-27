import {by, element, ElementFinder} from "protractor";
import Element from "../objects/Element";

export default class EmployerInfoPad {

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private COMPONENT_NAME: string = 'Vacancies Pad';

    private EMPLOYER_INFO_PAD_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Container';
    private HEADER_LOGNAME: string = this.COMPONENT_NAME + ' Header';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private employerInfoPadContainerLoc: string = './/div[@class=\'HH-MainContent\']/div[@class=\'bloko-columns-wrapper\']';
    private headerLoc: string = '//div[@class=\'company-description__name\']/h1';

    private employerInfoPadContainerEl: ElementFinder = element(by.xpath(this.employerInfoPadContainerLoc));
    private headerEl: ElementFinder = element(by.xpath(this.headerLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="objects">
    public employerInfoPadContainer: Element = new Element(this.employerInfoPadContainerEl, this.EMPLOYER_INFO_PAD_CONTAINER_LOGNAME);
    public header: Element = new Element(this.headerEl, this.HEADER_LOGNAME);
    // </editor-fold>
}
