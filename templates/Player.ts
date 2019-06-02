import * as Sein from 'seinjs';

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.Player {
  public is__class__ = true;

  public onInit() {

  }

  public onSwitchController(controller: Sein.PlayerControllerActor) {

  }

  public onReleaseController(controller: Sein.PlayerControllerActor) {

  }

  public onUpdate(delta: number) {

  }

  public onError(error: Sein.BaseException, details?: any): boolean | void {

  }
}
