"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const fi_1 = require("react-icons/fi");
const FootNote = ({ children }) => {
    return (react_1.default.createElement(react_2.Text, { fontSize: 12, color: 'gray.700', fontStyle: 'italic' },
        react_1.default.createElement(react_2.Box, { mr: 1, display: 'inline', as: fi_1.FiCheckSquare }),
        children));
};
exports.default = FootNote;
