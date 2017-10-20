import {browser} from "protractor";
import NavBar from "../components/NavBar";
import PageOperations from "../objects/PageOperations";

export default class Login {

    // <editor-fold defaultstate="collapsed" desc="list of components">
    public navbar: NavBar = new NavBar();
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private PAGE_URL = browser.baseUrl;
    private PAGE_LOGNAME = 'Dashboard';
    // </editor-fold>

    public pageOperations: PageOperations = new PageOperations(this.PAGE_URL, this.PAGE_LOGNAME);
}
