import * as Sein from 'seinjs';

export type ILevelState = Sein.StateActor;

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.LevelScriptActor<ILevelState> {
  public static WorldStateClass: Sein.TConstructor<Sein.StateActor> = Sein.StateActor;

  public is__class__ = true;
  public updatePriority = Sein.InfoActor.UPDATE_PRIORITY.GameMode;

  public async onLogin() {

  }

  public onInit() {

  }

  public onAdd() {

  }

  public onPreload() {

  }

  public onLoading(state: Sein.IResourceState) {

  }

  public onCreate() {

  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {

  }
}
