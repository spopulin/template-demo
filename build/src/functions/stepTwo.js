"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
require("source-map-support/register");
exports.handler = async (event) => {
    return {
        message: 'Step two executed succesfully!',
        previousStateOutput: event.Input.Payload.message,
    };
};
//# sourceMappingURL=stepTwo.js.map