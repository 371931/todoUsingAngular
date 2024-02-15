import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { Notes } from './notes';
import { NotesService } from './notes-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContainerComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  noteService: any = inject(NotesService);

  ngOnInit(): void {
    this.noteService.localGet();
    this.notesArr = this.noteService.getAllNotes();
  }

  title = 'myownFirst';

  notesArr: Notes[] = [];

  id: number = 0;

  onAdd(noteInput: any){
    this.id = this.notesArr[this.notesArr.length-1] === undefined ? 1 : this.notesArr[this.notesArr.length - 1].id + 1;
    if(noteInput.value !== ""){
      this.noteService.addNote(this.id,noteInput.value,0);
      noteInput.value = "";
      this.noteService.localSet();
    }else{
      alert("enter a todo");
    } 

    this.noteService.localGet();
  }
}
