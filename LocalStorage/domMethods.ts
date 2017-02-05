interface IDomMethods {
    byId(id:string);
}

export class StandardMethods implements IDomMethods {
    byId(id:string){
        return document.getElementById(id);
    }
}
