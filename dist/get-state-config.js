"use strict";
/**
 * Helper function to pull the state config object off of a class. Abstracts the property
 * name used and allows getting the config without Typescript complaining.
 *
 * @param target Class decorated with @StateConfig
 */
function getStateConfig(target) {
    return target.$uiStateConfig;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getStateConfig;
//# sourceMappingURL=get-state-config.js.map