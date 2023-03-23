export namespace AnimalActions {
  export class AddAnimal {
    static readonly type = '[zoo] add Animal';

    constructor(public name: string) {}
  }

  export class feedAnimals {
    static readonly type = '[zoo] feed Animal';
  }

  export interface zooStateModel {
    feed: boolean;
  }
}
