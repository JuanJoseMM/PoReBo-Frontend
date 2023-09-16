import { identificationDocument } from "./identificationDocuments.model";
import { signaturePerson } from "./signature.model";

export interface Persona{
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    dial_code:string,
    phone:string,
    gender:string,
    maritalStatus:string,
    nativeLanguage:string,
    gradeInstruction:string,
    identificationDocument:identificationDocument,
    status:string,
    signature:signaturePerson,
    workExperiences:Array<string>,
    createAt:Date,
    updateAt:Date
}

