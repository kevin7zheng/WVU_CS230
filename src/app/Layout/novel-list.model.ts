export class Novellist {
    title:string;
    release:string;
    group:string;

    constructor({ title, release, group }:
        { title:string, release:string, group:string}) {
        this.title = title;
        this.release = release;
        this.group = group;
    }
}