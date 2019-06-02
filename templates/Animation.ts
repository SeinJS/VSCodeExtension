import * as Sein from 'seinjs';

export interface I__class__State extends Sein.Animation {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.Animation<I__class__State> {
  public is__class__ = true;
  public updatePriority = Sein.InfoActor.UPDATE_PRIORITY.Others;

  public onInit(initState: I__class__State) {

  }

  public onPlay(loopCount?: number) {

  }

  public onPause() {

  }

  public onResume() {

  }

  public onStop() {

  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }
}
