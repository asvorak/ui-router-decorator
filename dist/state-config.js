"use strict";
/**
 * Decorator for controller classes for route states. You can reference the class in the
 * `controller` property. Name is a required property on the config if using the
 * registerState helper.
 * @return Function which takes a UI Router config object.
 */
function StateConfig(config) {
    return function (target) {
        target.$uiStateConfig = config;
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StateConfig;
//# sourceMappingURL=state-config.js.map