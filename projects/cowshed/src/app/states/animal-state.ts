import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { AnimalActions } from '../actions/animals';

const token = new StateToken<AnimalActions.zooStateModel>('Animal');

@State<AnimalActions.zooStateModel>({
  name: 'Animal',
  defaults: {
    feed: false,
  },
})
@Injectable()
export class AnimalState {

  @Action(AnimalActions.feedAnimals)
  feedAnimals(ctx: StateContext<AnimalActions.zooStateModel>) {
    //get gloabl state
    const state = ctx.getState();
    ctx.setState({
        ...state,
        feed: !state.feed
    })
  }

}
