import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Note} from './Note';
import {Category} from './Category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FirebaseService]
})


export class AppComponent implements OnInit {
  notes: Note[];
  categories: Category[];
  appState: string;
  activeKey: string;

    activeTitle:string;
    activeCategory:string;
    activeSlug:string;
    activeDescription:string;
    activeAuthor:string;


  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this._firebaseService.getNotes().subscribe(notes => {
      this.notes = notes;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  changeState(state, key) {
    console.log('Changing state to: ' + state);
    if (key) {
      console.log('Changing key to: ' + key);
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category) {
    this._firebaseService.getNotes(category).subscribe(notes => {
      this.notes = notes;
    });
  }

  addNote(
    title: string,
    category: string,
    slug: string,
    description: string,
    author: string) {
      var created_at = new Date().toString();

    var newNote = {
      title: title,
      category: category,
      slug: slug,
      description: description,
      author: author,
      created_at:created_at
    }

    //console.log(newNote);

       this._firebaseService.addNote(newNote);

       this.changeState('default', null);
  }


  showEdit(note){
        this.changeState('edit', note.$key);
        this.activeTitle =            note.title;
        this.activeCategory =         note.category;
        this.activeSlug =             note.slug;
        this.activeDescription =      note.description;
        this.activeAuthor =           note.author;
      }

      updateNote(){
          var updNote = {
          title:this.activeTitle,
          category:this.activeCategory,
          slug:this.activeSlug,
          description:this.activeDescription,
          author:this.activeTitle
        }

        this._firebaseService.updateNote(this.activeKey, updNote);

           this.changeState('default', null);
      }

      deleteNote(key){
        this._firebaseService.deleteNote(key);

           this.changeState('default', null);
      }
  }
