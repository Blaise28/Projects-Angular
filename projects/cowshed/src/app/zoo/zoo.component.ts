import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AnimalActions } from '../actions/animals';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss'],
})
export class ZooComponent {
  storeTest!:Store;

  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store.dispatch(new AnimalActions.AddAnimal(name));
  }

}
