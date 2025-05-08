export class TodosObject {
    id: number;
    constructor(
        public title:string,
        public completed:boolean = false,
        public description:string,
    ){
        this.id = Date.now()
    }
}