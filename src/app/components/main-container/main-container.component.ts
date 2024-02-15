import { Component, Input, inject } from '@angular/core';
import { Notes } from '../../notes';
import { NotesService } from '../../notes-services';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

  @Input() note!: Notes;

  noteService: any = inject(NotesService)

  check(event: any, tick: any,note: any,svgTick: any,content: any) {
    if (tick.classList.contains("added")) {
      tick.classList.remove("added");
      svgTick.style.display = "none";
      content.style.textDecoration = "none";
      this.noteService.updateNoteTo0(note.id);
    } else {
      tick.classList.add("added");
      svgTick.style.display = "block";
      content.style.textDecoration = "line-through";
      this.noteService.updateNoteTo1(note.id);
    }
  }

  del(event: any) {
    let classes: any = event.target.parentElement.parentElement.parentElement;
    classes.remove();
  }

  edit(event: any, con: any, text: any, editTick: any) {
    text.value = con.innerText;
    con.style.visibility = "hidden";
    event.target.style.visibility = "hidden";
    editTick.style.visibility = "visible";
    text.style.visibility = "visible";
    text.focus();
  }

  edited(event: any, editBtn: any, editTick: any, content: any, contentEdit: any) {
    console.log(editTick);

    content.innerText = contentEdit.value;
    editTick.style.visibility = "hidden";
    event.target.style.visibility = "hidden";
    editBtn.style.visibility = "visible";
    content.style.visibility = "visible";
  }

}
