import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';
import {Note} from '../Note';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
    notes: FirebaseListObservable<Note[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _db: AngularFireDatabase){

    }


    getNotes(category:string = null){
    if(category != null){
        this.notes = this._db.list('/notes', {
            query: {
                orderByChild: 'category',
                equalTo: category
            }
        }) as
        FirebaseListObservable<Note[]>
    } else {
        this.notes = this._db.list('/notes') as
        FirebaseListObservable<Note[]>
    }

    return this.notes;
}

    getCategories(){
        this.categories = this._db.list('/categories') as
        FirebaseListObservable<Category[]>
        return this.categories;
    }

    addNote(newNote){
      return this.notes.push(newNote);
  }

    updateNote(key, updNote){
        return this.notes.update(key, updNote);
    }

    deleteNote(key){
        return this.notes.remove(key);
    }
}
