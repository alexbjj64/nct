import CommonActions from "../actions/CommonActions";
import {ElementFinder} from "protractor";
import Element from "./Element";

let commonActions: CommonActions = new CommonActions();

export default class SelectorButton extends Element {

    constructor(element: ElementFinder, LOGNAME: string) {
        super(element, LOGNAME)
    }

    public click(): void {
        commonActions.click(this.element, this.LOGNAME)
    }
}
