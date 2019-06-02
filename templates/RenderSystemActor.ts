import * as Sein from 'seinjs';

export interface I__class__Options {

}

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.RenderSystemActor<I__class__Options> {
  public is__class__ = true;
  public updatePriority = Sein.InfoActor.UPDATE_PRIORITY.State;

  public onPreRender(initOptions: I__class__Options) {

  }

  public onPostClear(initOptions: I__class__Options) {

  }

  public onPostRender(initOptions: I__class__Options) {

  }

  public onError(error: Sein.BaseException, details: any) {

  }
}
