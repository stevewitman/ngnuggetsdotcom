import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post {
  id?: string;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsRef = collection(this.firestore, 'posts');
    return collectionData(postsRef, {
      idField: 'id',
    }) as Observable<Post[]>;
  }
}
