import * as Sein from 'seinjs';

export function is__class__(value: Sein.Material): value is __class__ {
  return (value as __class__).is__class__;
}

@Sein.SMaterial({className: '__class__'})
export default class __class__ extends Sein.ShaderMaterial {
  public is__class__ = true;

  public constructor(options: {
    uniforms: {
      u_diffuseMap: {value: Sein.Texture}
    }
  }) {
    super({
      uniforms: {
        u_diffuseMap: options.uniforms.u_diffuseMap
      },
      vs: `
precision highp float;
precision highp int;

attribute vec3 a_position;
attribute vec2 a_uv;

uniform mat4 u_modelViewProjectionMatrix;

varying vec2 v_uv;

void main()
{
  gl_Position = u_modelViewProjectionMatrix * vec4(a_position, 1.0);
  v_uv = a_uv;
}
      `,
      fs: `
precision mediump float;
precision mediump int;

uniform sampler2D u_diffuseMap;
varying vec2 v_uv;

void main()
{
  gl_FragColor = texture2D(u_diffuseMap, v_uv);
}     
      `
    });
  }
}
