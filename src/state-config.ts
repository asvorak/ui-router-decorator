import {IStateController} from './state.interface';

/**
 * Decorator for controller classes for route states. You can reference the class in the
 * `controller` property. Name is a required property on the config if using the 
 * registerState helper.
 * @return Function which takes a UI Router config object.
 */
export default function StateConfig(target: any) {
  return function(config) {
    (<IStateController> target).$uiStateConfig = config;
  }
}