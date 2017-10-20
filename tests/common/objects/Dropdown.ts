import CommonActions from "../actions/CommonActions";
import {ElementFinder, by, element} from "protractor";
import Element from "./Element";

let commonActions: CommonActions = new CommonActions();

export default class Dropdown extends Element {

    constructor(element: ElementFinder, LOGNAME: string) {
        super(element, LOGNAME)
    }

    public expectElementsContainText(text: string): void {
        element.all(by.xpath(this.element.locator()['value'] + '/child::*'))
            .each((element, index) => {
                let resultEl: Element = new Element(element, 'Element from ' + this.LOGNAME + 'with index' + index);
                resultEl.expectIsVisible();
                resultEl.expectTextOfElementContains(text);
                commonActions.log('Containing of text: ' + text + ' of element with index: ' + index + ' has been checked');
            });
        commonActions.log('Containing of text: ' + text + ' of all the child elements of: ' + this.LOGNAME + ' has been checked');
    };
}
