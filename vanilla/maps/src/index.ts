import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();
const company = new Company();
const map = new Map("map"); //without a variable assignment, it runs an instance of a class without saving it into a variable. | Only runs the constructor function

//Bad Approach calls
// map.addUserMarker(user);
// map.addCompanyMarker(company);

//Better Approach call
map.addMarker(user);
map.addMarker(company);
