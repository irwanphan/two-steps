import {BlockSection} from "./elements/BlockSection";
import BubbleContainer from "./elements/BubbleContainer";
import FootNote from "./elements/FootNote";
import IconicTitle from "./elements/IconicTitle";
import PageTitle from "./elements/PageTitle";

export function helloWorld() {
    const message = 'Hello World from my example modern npm package!';
    return message;
}
export function goodBye() {
    const message = 'Goodbye from my example modern npm package!';
    return message;
}

export {
    BlockSection,
    BubbleContainer,
    FootNote,
    IconicTitle,
    PageTitle
}
  
export default {
    helloWorld,
    goodBye,
    BlockSection,
    BubbleContainer,
    FootNote,
    IconicTitle,
    PageTitle
}