import {browser} from "protractor";
import EmployersListTable from "../components/EmployersListTable";
import PageOperations from "../objects/PageOperations";
import NavBar from "../components/NavBar";

export default class EmployersList {

    // <editor-fold defaultstate="collapsed" desc="list of components">
    public employersListTable: EmployersListTable = new EmployersListTable();
    public navBar: NavBar = new NavBar();
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private PAGE_URL = browser.baseUrl + 'employers_list';
    private PAGE_LOGNAME = 'Employers List';
    // </editor-fold>

    public pageOperations: PageOperations = new PageOperations(this.PAGE_URL, this.PAGE_LOGNAME);
}
