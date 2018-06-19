/**
 * Factory function to create a config function that registers an angular config function
 * that registers the state using the value from the route config.
 *
 * @param target Class decorated with @StateConfig
 * @return A function which can be passed to angular.config to register the state on the target
 */
export default function registerState(target: any): ($stateProvider: any) => void;
