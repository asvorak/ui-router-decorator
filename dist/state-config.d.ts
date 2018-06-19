import { IState } from './state.interface';
/**
 * Decorator for controller classes for route states. You can reference the class in the
 * `controller` property. Name is a required property on the config if using the
 * registerState helper.
 * @return Function which takes a UI Router config object.
 */
export default function StateConfig(config: IState): (target: any) => void;
