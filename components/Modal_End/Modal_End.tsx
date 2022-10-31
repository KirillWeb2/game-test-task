import React from "react";
import Image from "next/image";

import { ISettings } from "../../interface";
import {
  Button,
  ModalEnd,
  ModalEndGradient,
  ModalEndStar,
  ModalEndText,
  ModalEndTitle,
} from "../../assets/styles/components";

import star from "../../assets/img/end/star.png";

interface Props {
  setSettings: (settings: ISettings) => void;
  settings: ISettings;
  updateModalState: () => void;
}

export default ({ setSettings, settings, updateModalState }: Props) => {

  const again = () => {
    setSettings({ ...settings, mode: "settings" });
    updateModalState();
  };

  return (
    <ModalEndGradient>
      <ModalEnd>
        <ModalEndStar positionX={-18} positionY={-18} size="middle">
          <Image src={star} alt="image" />
        </ModalEndStar>
        <ModalEndStar positionX={-18} positionY={66} size="large">
          <Image src={star} alt="image" />
        </ModalEndStar>
        <ModalEndStar positionX={75} positionY={23} size="large">
          <Image src={star} alt="image" />
        </ModalEndStar>
        <ModalEndStar positionX={84} positionY={80} size="small">
          <Image src={star} alt="image" />
        </ModalEndStar>
        <ModalEndTitle>Победа!</ModalEndTitle>
        <ModalEndText>Молодец! Ты успешно справился с заданием!</ModalEndText>
        <Button onClick={again}>Заново</Button>
      </ModalEnd>
    </ModalEndGradient>
  );
};
