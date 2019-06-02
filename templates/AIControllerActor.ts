import * as Sein from 'seinjs';

type IState = Sein.PlayerStateActor;
type IActor = Sein.SceneActor;

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.AIControllerActor<IState, IActor> {
  public is__class__ = true;

  public onInit(initOptions: Sein.IControllerActorState<IState, IActor>) {

  }

  public onAdd(initOptions: Sein.IControllerActorState<IState, IActor>) {

  }

  public onPossesActor(actor: IActor) {

  }

  public onDisPossesActor(actor: IActor) {

  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {

  }
}
