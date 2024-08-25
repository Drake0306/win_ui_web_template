import * as React from "react";
import { CompoundButton } from "@fluentui/react-components";
import type { CompoundButtonProps } from "@fluentui/react-components";
import "./CompundBTN.css";

type CompundBTNProps = CompoundButtonProps & {
    text: string;
    SecondaryText: string;
    icon: React.ReactElement;
};

export const CompundBTN: React.FC<CompundBTNProps> = ({ text, SecondaryText, icon, ...props }) => (
    <CompoundButton
        className="compound-container-center"
        icon={icon}
        secondaryContent={SecondaryText}
        {...props}
    >
        {text}
    </CompoundButton>
);
