import * as Sein from 'seinjs';

export interface I__class__State extends Sein.ISceneComponentState {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.SceneComponent<I__class__State> {
  public is__class__ = true;

  public onInit(initState: I__class__State) {
    super.onInit(initState);
  }

  public onAdd(initState: I__class__State) {
    super.onAdd(initState);
  }

  public onUnLink() {

  }

  public reUnLink() {
    
  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {
    super.onDestroy();
  }
}
