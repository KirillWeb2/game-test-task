import React, { useCallback } from "react";
import Image from "next/image";

import {
  ButtonBox,
  SettingsBox,
  Gradient,
  GroupButtons,
  NumberOfItems,
  Button,
  BackgroundImage,
} from "../../assets/styles/components";
import Range from "../UI/Range/Range";
import CheckButton from "../UI/CheckButton/CheckButton";

import { IKeyTyping, ISettings } from "../../interface";

import { Text } from "../../assets/styles/default";
import bg from "../../assets/img/settings/bg.png";

interface Props {
  setSettings: (settings: ISettings) => void;
  settings: ISettings;
}

export default ({ setSettings, settings }: Props) => {
  const changeDirection = useCallback(
    (data: "increasing" | "decreasing") =>
      setSettings({ ...settings, direction: data }),
    [settings, setSettings]
  );

  const changeNumberOfItems = (num: number | string) =>
    setSettings({ ...settings, number_of_items: +num });

  const ChangeValuesForItems = (num: number | string) => {
    if (num === "A") return setSettings({ ...settings, values_for_items: "A" });

    const params: IKeyTyping = {
      9: [1, 9],
      19: [10, 19],
      50: [20, 50],
      99: [51, 99],
      999: [100, 999],
    };

    setSettings({ ...settings, values_for_items: params[+num] });
  };

  const startTheGame = () => {
    const randomMap = Math.floor(Math.random() * 3);
    const maps: string[] = ["cookies", "coin", "toy"];

    setSettings({
      ...settings,
      map: maps[randomMap],
      mode: "play",
    });
  };

  return (
    <>
      <Gradient>
        <SettingsBox bg="white">
          <BackgroundImage>
            <Image src={bg} alt="bg" />
          </BackgroundImage>
          <NumberOfItems>
            <Text>Кол-во предметов</Text>
            <Range
              defaultValue={settings.number_of_items}
              onChange={changeNumberOfItems}
              min={0}
              max={3}
              values={[2, 3, 4, 5]}
            />
          </NumberOfItems>
          <NumberOfItems>
            <Text>Значения</Text>
            <Range
              defaultValue={settings.values_for_items}
              onChange={ChangeValuesForItems}
              min={0}
              max={5}
              values={["A", 9, 19, 50, 99, 999]}
            />
          </NumberOfItems>
          <GroupButtons>
            <CheckButton
              changeDirection={changeDirection}
              direction={"increasing"}
              settings={settings}
            >
              По возрастанию
            </CheckButton>
            <CheckButton
              changeDirection={changeDirection}
              direction={"decreasing"}
              settings={settings}
            >
              По убыванию
            </CheckButton>
          </GroupButtons>
          <ButtonBox>
            <Button onClick={startTheGame}>Играть</Button>
          </ButtonBox>
        </SettingsBox>
      </Gradient>
    </>
  );
};
