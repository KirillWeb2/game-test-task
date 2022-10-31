import React, { memo } from "react";
import { CheckButton } from "../../../assets/styles/components";
import { ISettings } from "../../../interface";

interface Props {
  direction: "increasing" | "decreasing";
  children: React.ReactNode;
  changeDirection: (data: "decreasing" | "increasing") => void;
  settings: ISettings;
}

export default memo(
  ({ direction, changeDirection, settings, children }: Props) => {
    const change = () => changeDirection(direction);

    return (
      <CheckButton
        onClick={change}
        opacity={direction === settings.direction ? 1 : 0.5}
      >
        {children}
      </CheckButton>
    );
  }
);
