"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("react");
const PageTitle = ({ children }) => {
    return (react_1.default.createElement(react_3.Fragment, null,
        react_1.default.createElement(react_2.Heading, { as: 'h2', size: 'md', textTransform: 'capitalize', color: 'gray.700', w: 'full', fontWeight: 700, mb: 6, letterSpacing: 0.5 }, children)));
};
exports.default = PageTitle;
