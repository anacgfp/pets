import Responsible from "./responsible.model";

export default interface Pet {
  id?: number;
  name: string;
  type: string;
  responsible: Responsible;
}
