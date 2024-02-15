import { Notes } from "./notes";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NotesService{
    notes: Notes[] = [];

    getAllNotes(): Notes[] {
        return this.notes;
      }

    addNote(id: number,note: string,completed: number): void{
        this.notes.push({
            id: id,
            note: note,
            completed: completed,
        });
    }

    updateNoteTo1(id:number){
        let note: any = this.notes.find((val)=> val.id = id);
        note.completed = 1;
        console.log(note); 
        console.log(this.notes);
    }

    updateNoteTo0(id:number){
        let note: any = this.notes.find((val)=> val.id = id);
        note.completed = 0;
        console.log(note); 
        console.log(this.notes);
    }

    localSet(){
        localStorage.setItem("notesAngular",JSON.stringify(this.notes));
    }

    localGet(){ 
        let notesLocal: any = localStorage.getItem("notesAngular");
        this.notes = JSON.parse(notesLocal);
    }

    editNote(id:number,content: any){
        let note: any = this.notes.find((val)=> val.id = id);
    }
}