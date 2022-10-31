import React from "react";

import { Shadow } from "../../assets/styles/components";

interface Props {
  canShow: boolean;
  updateModalState: () => void;
  children: React.ReactNode;
}

export default ({ canShow, updateModalState, children }: Props) => {
  if (canShow) {
    return (
      <Shadow onClick={updateModalState}>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </Shadow>
    );
  }
  return null;
};
