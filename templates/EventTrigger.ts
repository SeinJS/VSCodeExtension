import * as Sein from 'seinjs';

export interface I__name__Event extends Sein.ISeinEvent {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.EventTrigger<I__name__Event> {
  public is__class__ = true;

  public onBegin() {

  }

  public onPause() {

  }

  public onTrigger(event: I__name__Event) {
    this._eventManager.trigger(this._type.value, event, this.autoFlush);
  }
}
