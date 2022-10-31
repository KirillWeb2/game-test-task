import React, { useState } from "react";

import Modal from "../Modal/Modal";
import Modal_End from "../Modal_End/Modal_End";
import Play from "../Play/Play";
import Settings from "../Settings/Settings";

import { Positioning } from "../../assets/styles/components";

import { ISettings } from "../../interface";

export default () => {
  const [settings, setSettings] = useState<ISettings>({
    mode: "settings",
    direction: "increasing",
    map: "cookies",
    number_of_items: 5,
    values_for_items: [1, 9],
  });

  const [isModal, setIsModal] = useState<boolean>(false);

  const updateModalState = () => {
    setIsModal((prev) => !prev);
    setSettings({ ...settings, mode: "settings" });
  };

  return (
    <Positioning>
      {settings.mode === "settings" && (
        <Settings settings={settings} setSettings={setSettings} />
      )}
      {settings.mode === "play" && (
        <Play settings={settings} updateModalState={updateModalState} />
      )}
      <Modal canShow={isModal} updateModalState={updateModalState}>
        <Modal_End
          settings={settings}
          setSettings={setSettings}
          updateModalState={updateModalState}
        />
      </Modal>
    </Positioning>
  );
};
