import { role } from "./role.model";

export class User {
    id! : number;
    nom? : string;
    role! : role;
}