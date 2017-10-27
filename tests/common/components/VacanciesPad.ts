import {by, element, ElementFinder, ElementArrayFinder} from "protractor";
import Element from "../objects/Element";
import Button from "../objects/Button";
import ElementsList from "../objects/ElementsList";

export default class VacanciesPad {

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private COMPONENT_NAME: string = 'Vacancies Pad';

    private VACANCIES_PAD_CONTAINER_LOGNAME: string = this.COMPONENT_NAME + ' Container';
    private VACANCIES_ALL_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' Vacancies All Button';
    private VACANCIES_COUNT_ALL_LOGNAME: string = this.COMPONENT_NAME + ' Count Of All Vacancies';
    private IT_VACANCIES_BUTTON_LOGNAME: string = this.COMPONENT_NAME + ' IT Vacancies Button';
    private IT_VACANCIES_CONTAINER: string = this.COMPONENT_NAME + 'IT Vacancies Container';
    private VACANCIES_ELEMENTS_LOGNAME: string = this.COMPONENT_NAME + ' Vacancies Elements';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private vacanciesPadContainerLoc: string = './/*[@id=\'vacancy-list\']/following-sibling::div[1]';
    private vacanciesAllButtonLoc: string = this.vacanciesPadContainerLoc + '//span[@data-toggle=\'all\']';
    private vacanciesCountAllLoc: string = this.vacanciesAllButtonLoc + '/following-sibling::span';
    private itVacanciesButtonLoc: string = this.vacanciesAllButtonLoc + '/../following-sibling::div/div[1]';
    private vacanciesElementsLoc: string = this.vacanciesPadContainerLoc + '//a[contains(@class, \'search-result-item__name\')]';
    private itVacanciesContainerLoc: string = this.vacanciesElementsLoc + '/ancestor::tbody';

    private vacanciesPadContainerEl: ElementFinder = element(by.xpath(this.vacanciesPadContainerLoc));
    private vacanciesAllButtonEl: ElementFinder = element(by.xpath(this.vacanciesAllButtonLoc));
    private vacanciesCountAllEl: ElementFinder = element(by.xpath(this.vacanciesCountAllLoc));
    private itVacanciesButtonEl: ElementFinder = element(by.xpath(this.itVacanciesButtonLoc));
    private vacanciesElementsEl: ElementArrayFinder = element.all(by.xpath(this.vacanciesElementsLoc));
    private itVacanciesContainerEl: ElementFinder = element(by.xpath(this.itVacanciesContainerLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="objects">
    public vacanciesPadContainer: Element = new Element(this.vacanciesPadContainerEl, this.VACANCIES_PAD_CONTAINER_LOGNAME);
    public vacanciesAllButton: Button = new Button(this.vacanciesAllButtonEl, this.VACANCIES_ALL_BUTTON_LOGNAME);
    public vacanciesCountAll: Element = new Element(this.vacanciesCountAllEl, this.VACANCIES_COUNT_ALL_LOGNAME);
    public itVacanciesButton: Button = new Button(this.itVacanciesButtonEl, this.IT_VACANCIES_BUTTON_LOGNAME);
    public itVacanciesContainer: Element = new Element(this.itVacanciesContainerEl, this.IT_VACANCIES_CONTAINER);
    public vacanciesElements: ElementsList = new ElementsList(this.vacanciesElementsEl, this.VACANCIES_ELEMENTS_LOGNAME);
    // </editor-fold>
}
