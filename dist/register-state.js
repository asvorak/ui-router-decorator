"use strict";
var get_state_config_1 = require('./get-state-config');
/**
 * Factory function to create a config function that registers an angular config function
 * that registers the state using the value from the route config.
 *
 * @param target Class decorated with @StateConfig
 * @return A function which can be passed to angular.config to register the state on the target
 */
function registerState(target) {
    function configFn($stateProvider) {
        $stateProvider.state(get_state_config_1.default(target));
    }
    configFn.$inject = ['$stateProvider'];
    return configFn;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerState;
//# sourceMappingURL=register-state.js.map