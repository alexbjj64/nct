import CommonActions from "../actions/CommonActions";
import {ElementFinder, by} from "protractor";
import Button from "./Button";

let commonActions: CommonActions = new CommonActions();

export default class Selector extends Button {

    constructor(element: ElementFinder, LOGNAME: string) {
        super(element, LOGNAME)
    }

    public expectIsSelectedValueCorrect(value: string): void {
        commonActions.isTextEquals(this.element.element(by.css('[selected]')), value, this.LOGNAME);
        commonActions.log('Correctness of ' + this.LOGNAME + ' has been checked');
    }
}
