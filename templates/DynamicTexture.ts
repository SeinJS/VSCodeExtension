import * as Sein from 'seinjs';

export interface I__class__Options extends Sein.IDynamicTextureOptions {

}

export function is__class__(value: Sein.Texture): value is __class__ {
  return (value as __class__).is__class__;
}

export default class __class__ extends Sein.DynamicTexture<I__class__Options> {
  public is__class__ = true;

  public onInit(context: CanvasRenderingContext2D, initOptions: I__class__Options): void | boolean {
    return false;
  }

  public onDraw(context: CanvasRenderingContext2D): void | boolean {
    return false;
  }
}
