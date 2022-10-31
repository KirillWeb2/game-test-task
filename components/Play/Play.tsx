import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Board,
  BoardList,
  BoardListItem,
  PlayBox,
  ItemTheField,
  ItemTheFieldText,
  ListItemsTheField,
  Direction,
  ItemTheFieldWidth,
  BackgroundImage,
} from "../../assets/styles/components";

import { IItem, IMapsKeyTyping, ISettings } from "../../interface";

import cookies_bg from "../../assets/img/maps/1/bg.png";
import coin_bg from "../../assets/img/maps/2/bg.png";
import toy_bg from "../../assets/img/maps/3/bg.png";

import cookie from "../../assets/img/maps/1/cookies-5.png";
import coin from "../../assets/img/maps/2/coin-1.png";
import toy from "../../assets/img/maps/3/toy-1.png";


const backgroundBoard: IMapsKeyTyping = {
  toy: "#419cab",
  cookies: "#c1957a",
  coin: "#5e3e59",
};
const maps: IMapsKeyTyping = {
  cookies: cookies_bg,
  coin: coin_bg,
  toy: toy_bg,
};
const items: IMapsKeyTyping = {
  cookies: cookie,
  coin: coin,
  toy: toy,
};

interface Props {
  settings: ISettings;
  updateModalState: () => void;
}

let audio: HTMLAudioElement | null = null;

export default ({ settings, updateModalState }: Props) => {
  const [currentItem, setCurrentItem] = useState<IItem>({} as IItem); // выбранный элемент
  const [selectedСell, setSelectedСell] = useState<number | null>(null); // выбранная ячейка на доске
  const [elementsOnTheField, setElementsOnTheField] = useState<IItem[]>([]); // список элементов в поле
  const [elementsOnTheBoard, setElementsOnTheBoard] = useState<
    Array<null | IItem>
  >([]); // список элементов на доске

  const [isError, setIsError] = useState<boolean>(false);

  const generateItem = (): IItem | null => {
    if (settings.values_for_items === "A") {
      const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
      return {
        // рандомный буквенный элемент
        order: 0,
        value: alphabet[Math.floor(Math.random() * alphabet.length)],
        visible: true,
      };
    }

    return {
      // рандомный числовой элемент
      order: 0,
      value: Math.floor(
        Math.random() *
          (settings.values_for_items[1] - settings.values_for_items[0]) +
          settings.values_for_items[0]
      ),
      visible: true,
    };
  };

  const getCorrectArray = (): IItem[] => {
    // сортировка "правильного массива"
    const arr = [...elementsOnTheField].sort((a: IItem, b: IItem) => {
      if (typeof a.value === "number" && typeof b.value === "number") {
        // тут проверяем, что сортируем, числа или строки
        return settings.direction === "increasing" // тут определяем в какую сторону сортируем
          ? a["value"] - b["value"]
          : b["value"] - a["value"];
      } else {
        return settings.direction === "increasing"
          ? a["value"] > b["value"]
            ? 1
            : -1
          : a["value"] > b["value"]
          ? -1
          : 1;
      }
    });

    if (settings.direction === "decreasing") {
      return arr.reverse();
    }

    return arr;
  };

  const findItem = (arr: IItem[], el: IItem | null): IItem | null => {
    return arr.find((i) => i.value === el?.value) ? null : el;
  };

  const generatedElementsOnTheField = () => {
    const array: IItem[] = [];

    for (let i = 0; i < settings.number_of_items; i++) {
      let find = null;

      while (find === null) {
        // цикл работает до тех пор, пока не получит уникальный элемент среди каких либо значений
        find = findItem(array, generateItem());
      }

      if (find !== null) {
        array.push(find);
      }
    }

    setElementsOnTheField(array);
  };

  const generatedElementsOnTheBoard = () => {
    // при первой загрузке заполняю элементы доски N кол-во Null
    const board: Array<null | IItem> = [];
    for (let i = 0; i < settings.number_of_items; i++) {
      board.push(null);
    }
    setElementsOnTheBoard(board);
  };

  const transfer = () => {
    if (selectedСell !== null && elementsOnTheBoard[selectedСell] === null) {
      let correctArray: IItem[] = getCorrectArray(); // правильный массив, использую для сравнения с текущим

      const copy = [...elementsOnTheBoard];
      copy[selectedСell] = currentItem; // скопировал массив и вставил значение по индексу

      if (correctArray[selectedСell] === copy[selectedСell]) {
        // если элемент по индексу равен элементу по индексу в правильном массиве, тогда идём дальше
        setElementsOnTheField(
          elementsOnTheField.map((i) => {
            if (i.value === currentItem.value) {
              // убрать с поля вставленный элемент
              return { ...i, visible: false };
            } else {
              return i;
            }
          })
        );

        if (victoryCheck(copy)) victory();

        return setElementsOnTheBoard(copy); // добавить элемент в нижнюю доску
      }
      showError();
    } else {
      showError();
    }
  };

  const victory = () => {
    audio = new Audio(
      `https://cases-stores-yjmbwl62s-kirillweb2.vercel.app/images/audio/win.mp3`
    );
    audio.volume = 0.5;

    audio.play();

    updateModalState();
  };

  const showError = () => {
    audio = new Audio(
      `https://cases-stores-yjmbwl62s-kirillweb2.vercel.app/images/audio/mistake.mp3`
    );
    audio.volume = 0.5;

    audio.play();

    setIsError(true);
  };

  const victoryCheck = (arr: Array<IItem | null>): boolean => {
    const isVictory = arr.filter((i) => i === null);
    return isVictory.length === 0;
  };

  const dragStartHandler = (el: IItem) => {
    setCurrentItem(el);
    setIsError(false);
  };

  useEffect(() => {
    if (elementsOnTheField.length === 0) generatedElementsOnTheField();
    if (elementsOnTheBoard.length === 0) generatedElementsOnTheBoard();
  }, []);

  return (
    <>
      <BackgroundImage>
        <Image src={maps[settings.map]} alt="bg" />
      </BackgroundImage>
      <PlayBox bg="transparent">
        <ListItemsTheField>
          {elementsOnTheField &&
            elementsOnTheField.map((i, index) =>
              i.visible ? (
                <ItemTheFieldWidth key={index}>
                  <ItemTheField
                    draggable
                    onDragEnd={() => transfer()}
                    onDragStart={() => dragStartHandler(i)}
                  >
                    <Image src={items[settings.map]} alt="item" />
                    <ItemTheFieldText>{i.value}</ItemTheFieldText>
                  </ItemTheField>
                </ItemTheFieldWidth>
              ) : null
            )}
        </ListItemsTheField>
        <Direction type={settings.direction}>
          {settings.direction === "decreasing" ? (
            <p>По убыванию</p>
          ) : (
            <p>По возрастанию</p>
          )}
        </Direction>
        <Board error={isError} bg={backgroundBoard[settings.map]}>
          <BoardList>
            {elementsOnTheBoard.map((i, index: number) =>
              i === null ? (
                <BoardListItem
                  bg="white"
                  shadow={true}
                  key={index}
                  onDragEnter={() => setSelectedСell(index)}
                ></BoardListItem>
              ) : (
                <BoardListItem bg="transparent" shadow={false} key={index}>
                  <ItemTheFieldText>{i.value}</ItemTheFieldText>
                  <Image src={items[settings.map]} alt="item" />
                </BoardListItem>
              )
            )}
          </BoardList>
        </Board>
      </PlayBox>
    </>
  );
};
