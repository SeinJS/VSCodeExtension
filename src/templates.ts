/**
 * @File   : templates.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 6/1/2019, 1:56:58 PM
 * @Description:
 */
export type TTemplate = {label: string, type: string};

const templates: TTemplate[] = [
  {type: 'GameMode', label: 'GameModeActor'},
  {type: 'LevelScript', label: 'LevelScriptActor'},

  {type: 'Component', label: 'Component'},
  {type: 'Component', label: 'SceneComponent'},

  {type: 'Actor', label: 'InfoActor'},
  {type: 'Actor', label: 'SceneActor'},
  {type: 'Actor', label: 'StateActor'},
  {type: 'Actor', label: 'SystemActor'},
  {type: 'Actor', label: 'RenderSystemActor'},

  {type: 'Material', label: 'RawShaderMaterial'},
  {type: 'Material', label: 'ShaderMaterial'},

  {type: 'Texture', label: 'DynamicTexture'},
  
  {type: 'Player', label: 'Player'},
  {type: 'Actor', label: 'PlayerStateActor'},
  {type: 'Actor', label: 'AIControllerActor'},
  {type: 'Actor', label: 'PlayerControllerActor'},

  {type: 'Animation', label: 'Animation'},
  {type: 'Trigger', label: 'EventTrigger'},
  {type: 'Loader', label: 'ResourceLoader'}
];

export default templates;
