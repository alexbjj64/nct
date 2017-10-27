import CommonActions from "../actions/CommonActions";
import {ElementFinder} from "protractor";

let commonActions: CommonActions = new CommonActions();

export default class Element {

    protected element: ElementFinder;
    protected LOGNAME: string;

    constructor(element: ElementFinder, LOGNAME: string) {
        this.element = element;
        this.LOGNAME = LOGNAME;
    }

    public expectIsVisible(): void {
        this.waitUntilIsVisible();
        this.isDisplayed();
        commonActions.log('Visibility of ' + this.LOGNAME + ' has been checked');
    }

    public expectIsNotVisible(): void {
        this.waitUntilIsNotVisible();
        this.isNotDisplayed();
        commonActions.log('Invisibility of ' + this.LOGNAME + ' has been checked');
    }

    public expectIsClickable(): void {
        this.waitUntilIsClickable();
        this.isClickable();
        commonActions.log('Clickability of ' + this.LOGNAME + ' has been checked');
    }

    public  expectTextOfElementContains(text: string): void {
        this.waitUntilIsTextOfElementContains(text);
        this.isTextContainsCaseInsensitive(text);
        commonActions.log('Content of ' + text + ' in ' + this.LOGNAME + ' has been checked');
    }

    public expectIsCorrect(text: string): void {
        this.waitUntilIsVisible();
        this.isCorrect(text);
        commonActions.log('Correctness of ' + this.LOGNAME + ' has been checked');
    }

    public expectIsValueCorrect(text: string): void {
        this.waitUntilIsVisible();
        this.isValueEquals(text);
        commonActions.log('Value of ' + this.LOGNAME + ' has been checked');
    }

    public expectIsPresent(): void {
        this.waitUntilIsPresent();
        this.isPresent();
        commonActions.log('Presence of ' + this.LOGNAME + ' has been checked');
    }

    public expectIsNotPresent(): void {
        this.waitUntilIsNotPresent();
        this.isNotPresent();
        commonActions.log('Unpresence of ' + this.LOGNAME + ' has been checked');
    }

    private waitUntilIsVisible() {
        commonActions.waitUntilIsVisible(this.element);
    }

    private waitUntilIsNotVisible() {
        commonActions.waitUntilIsNotVisible(this.element);
    }

    private waitUntilIsClickable() {
        commonActions.waitUntilIsClickable(this.element);
    }

    private waitUntilIsPresent() {
        commonActions.waitUntilIsPresent(this.element);
    }

    private waitUntilIsNotPresent() {
        commonActions.waitUntilIsNotPresent(this.element);
    }

    private waitUntilIsTextOfElementContains(text: string) {
        commonActions.waitUntilTextOfElementContains(this.element, text);
    }

    private isPresent() {
        commonActions.isPresent(this.element, this.LOGNAME);
    }

    private isNotPresent() {
        commonActions.isNotPresent(this.element, this.LOGNAME);
    }

    private isDisplayed() {
        commonActions.isDisplayed(this.element, this.LOGNAME);
    }

    private isNotDisplayed() {
        commonActions.isNotDisplayed(this.element, this.LOGNAME);
    }

    private isClickable() {
        commonActions.isClickable(this.element, this.LOGNAME);
    }

    private isCorrect(text: string): void {
        commonActions.isTextEquals(this.element, text, this.LOGNAME);
    }

    private isTextContainsCaseInsensitive(text: string): void {
        commonActions.isTextContainsCaseInsensitive(this.element, text, this.LOGNAME);
    }

    private isValueEquals(text: string): void {
        commonActions.isValueEquals(this.element, text, this.LOGNAME);
    }
}
