import CommonActions from "../actions/CommonActions";

let commonActions: CommonActions = new CommonActions();

export default class PageOperations {

    protected URL: string;
    protected LOGNAME: string;

    constructor(url: string, LOGNAME: string) {
        this.URL = url;
        this.LOGNAME = LOGNAME;
    }

    public  open(): void {
        commonActions.openPage(this.URL, this.LOGNAME);
    };

    public  refresh(): void {
        commonActions.refreshPage(this.LOGNAME);
    };

    public  expectIsLoaded() {
        commonActions.isUrlEquals(this.URL, this.LOGNAME);
        commonActions.log(this.LOGNAME + ' pageOperations with URL ' + this.URL + ' has been loaded');
    };
}
