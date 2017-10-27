import CommonActions from "../actions/CommonActions";
import {ElementArrayFinder} from "protractor";
import Element from "./Element";
import Button from "./Button";

let commonActions: CommonActions = new CommonActions();

export default class ElementsList {

    protected elements: ElementArrayFinder;
    protected LOGNAME: string;

    constructor(elements: ElementArrayFinder, LOGNAME: string) {
        this.elements = elements;
        this.LOGNAME = LOGNAME;
    }

    public expectElementsContainText(text: string): void {
        this.elements.each((element, index) => {
            let resultEl: Element = new Element(element, 'Element from ' + this.LOGNAME + 'with index ' + index);
            resultEl.expectIsVisible();
            resultEl.expectTextOfElementContains(text);
            commonActions.log('Containing of text: ' + text + ' of element with index: ' + index + ' has been checked');
        });
        commonActions.log('Containing of text: ' + text + ' of all the child elements of: ' + this.LOGNAME + ' has been checked');
    }

    public expectElementsCountEqualsTo(expectedCount: number): void {
        commonActions.isElementsCountEqualTo(this.elements, expectedCount, this.LOGNAME);
        commonActions.log('Elements count was been checked on equality to: ' + expectedCount);
    }

    public elementClick(elementText: string): void {
        this.elements.each((element) => {
            element.getText()
                .then((text) => {
                    if (text.toLowerCase() === elementText.toLowerCase()) {
                        let clickableElement: Button = new Button(element, 'Element from ' + this.LOGNAME + ' with text ' + elementText);
                        clickableElement.click();
                    }
                });
        });
    }

    public expectElementContainsTextExist(elementText: string): void {
        this.elements.filter((element) => {
            return element.getText()
                .then((text) => {
                    return text.includes(elementText)
                });
        }).then((elements) => {
            commonActions.isElementsCountGreaterThan(elements, 0, this.LOGNAME);
            commonActions.log('Elements were been checked on including of text: ' + elementText);
        });
    }
}
