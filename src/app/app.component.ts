import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  //inputdata:string = "test";

  Category="Category";
  Priority = "Priority";
  itemsCollection:AngularFirestoreCollection<Item>;

  saveTodo(inputdata){
    const documentId = this.db.createId();
    this.itemsCollection.doc(documentId).set({ taskname: inputdata, category: this.Category, priority: this.Category,id:documentId });
  }
  
  changeCategory(passedCategory){
    this.Category = passedCategory;
  }
  changePriority(passedPriority){
    this.Priority = passedPriority;
  }
     
  constructor(public db: AngularFirestore) {
 
    this.itemsCollection = this.db.collection('Personal');
  }


}


interface Item {
  taskname?: string;
  category?: string;
  priority?: string;
  id?: string;
}
