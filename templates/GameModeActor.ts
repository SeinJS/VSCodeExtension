import * as Sein from 'seinjs';

export type IWorldState = Sein.StateActor;

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.GameModeActor<IWorldState> {
  public static WorldStateClass: Sein.TConstructor<Sein.StateActor> = Sein.StateActor;

  public is__class__ = true;
  public updatePriority = Sein.InfoActor.UPDATE_PRIORITY.GameMode;

  public async onLogin() {

  }

  public onInit() {

  }

  public onAdd() {

  }

  public onCreatePlayers() {
    super.onCreatePlayers();
  }

  public onDestroyPlayers() {

  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {

  }
}
