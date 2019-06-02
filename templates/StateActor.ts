import * as Sein from 'seinjs';

export interface I__class__Options {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.StateActor<I__class__Options> {
  public is__class__ = true;
  public updatePriority = Sein.InfoActor.UPDATE_PRIORITY.State;

  public onInit(initOptions: I__class__Options) {

  }

  public onAdd(initOptions: I__class__Options) {

  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {

  }
}
