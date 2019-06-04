import * as Sein from 'seinjs';

export interface I__class__Options extends Sein.IStaticMeshComponentState {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.StaticMeshActor<I__class__Options> {
  public is__class__ = true;

  public onCreateRoot(initOptions: I__class__Options) {
    return super.onCreateRoot(initOptions);
  }

  public onInit(initOptions: I__class__Options) {

  }

  public onAdd(initOptions: I__class__Options) {

  }

  public onInstantiate(initOptions: I__class__Options) {

  }

  public onUnLink() {
    super.onUnLink();
  }

  public onReLink(parent: Sein.SceneActor | Sein.World) {
    super.onReLink(parent);
  }

  public onError(error: Sein.BaseException, details: any) {

  }

  public onUpdate(delta: number) {

  }

  public onDestroy() {

  }
}
