import {browser} from "protractor";
import PageOperations from "../objects/PageOperations";
import NavBar from "../components/NavBar";
import VacanciesPad from "../components/VacanciesPad";
import EmployerInfoPad from "../components/EmployerInfoPad";

export default class Employer {

    // <editor-fold defaultstate="collapsed" desc="list of components">
    public navBar: NavBar = new NavBar();
    public vacanciesPad: VacanciesPad = new VacanciesPad();
    public employerInfoPad: EmployerInfoPad = new EmployerInfoPad();
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private PAGE_URL = browser.baseUrl + 'employer/';
    private PAGE_LOGNAME = 'Employer';
    // </editor-fold>

    public pageOperations: PageOperations = new PageOperations(this.PAGE_URL, this.PAGE_LOGNAME);
}
