import * as Sein from 'seinjs';

export interface I__name__ResourceEntity extends Sein.IResourceEntity {

}

export interface I__name__InstantOptions extends Sein.IInstantOptions {

}

export type I__name__InstantResult = never;

export function is__class__(value: Sein.SObject): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SClass({className: '__class__'})
export default class __class__ extends Sein.ResourceLoader<I__name__ResourceEntity> {
  public is__class__ = true;

  public load(
    entity: IResource,
    callbacks: {
      onLoading(entity: I__name__ResourceEntity, progress: number): void;
      onLoaded(entity: I__name__ResourceEntity): void;
      onError(entity: I__name__ResourceEntity, error: Error): void;
    }
  ): void {
    setTimeout(() => callbacks.onLoaded(entity), 0);
  }

  public cancel(entity: I__name__ResourceEntity) {
    entity.canceled = true;
  }

  public instantiate(entity: I__name__ResourceEntity, options: I__name__InstantOptions): I__name__InstantResult {
    throw new Error('Not implemented !');
  }

  public release(entity: I__name__ResourceEntity) {

  }
}

declare module 'seinjs/types/Global' {
  export interface IGlobalDefaultLoaders {
    __name__: {
      entity: I__name__ResourceEntity;
      instantOptions: I__name__InstantOptions;
      instantResult: I__name__InstantResult;
    };
  }
}
