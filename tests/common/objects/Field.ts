import CommonActions from "../actions/CommonActions";
import {ElementFinder} from "protractor";
import Element from "./Element";

let commonActions: CommonActions = new CommonActions();

export default class Field extends Element {

    constructor(element: ElementFinder, LOGNAME: string) {
        super(element, LOGNAME)
    }

    public sendKeys(text: string): void {
        this.expectIsClickable();
        commonActions.sendKeys(this.element, this.LOGNAME, text);
    };

    public expectIsEmpty(): void {
        commonActions.isEmptyField(this.element, this.LOGNAME);
        commonActions.log('Emptiness of ' + this.LOGNAME + ' has been checked');
    };

    public expectIsCorrectPlaceholder(placeholder: string): void {
        commonActions.isPlaceholderEquals(this.element, placeholder, this.LOGNAME);
        commonActions.log('Placeholder of ' + this.LOGNAME + ' has been checked');
    };
}
