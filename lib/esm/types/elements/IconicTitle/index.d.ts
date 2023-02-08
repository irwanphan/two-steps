/// <reference types="react" />
import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface IconicTitleProps extends FlexProps {
    icon: IconType;
    hoverColor: string;
}
declare const IconicTitle: ({ icon, hoverColor, children, ...rest }: IconicTitleProps) => JSX.Element;
export default IconicTitle;
//# sourceMappingURL=index.d.ts.map