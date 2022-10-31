import styled from "styled-components";
import { wiggle } from "./animation";

export const BackgroundImage = styled.div`
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
  }
`;

// Range

export const RangeInput = styled.input`
  width: 100%;
`;

export const Range = styled.div`
  width: 100%;

  @media (max-width: 550px) {
    width: 90%;
  }
`;
export const RangeValues = styled.div`
  width: 98%;
  position: relative;
  padding-top: 25px;
`;
export const RangeValuesItem = styled.div<{ left: string }>`
  position: absolute;
  left: ${(props) => props.left}%;
  top: 0;
`;

// Button

export const Button = styled.button`
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-weight: 600;
  font-size: 40px;
  color: white;
  line-height: 51px;
  background: #2bd600;
  padding: 8px 66px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 460px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

// Settings

export const Positioning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Gradient = styled.div`
  border-radius: 54px;
  background: linear-gradient(198.7deg, #7f75f0 -40.02%, #101f32 96.22%),
    linear-gradient(0deg, #ffffff, #ffffff);
`;

export const SettingsBox = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  border-radius: 40px;
  margin: 20px;
  padding: 32px;
  background-color: ${(props) => props.bg};

  max-width: 500px;

  @media (max-width: 550px) {
    max-width: 400px;
    width: 400px;

    padding: 16px;
  }

  @media (max-width: 460px) {
    max-width: 300px;
    width: 300px;
    margin: 15px;

    gap: 6px;
  }
`;

export const NumberOfItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  margin: 15px 0;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

`;

export const CheckButton = styled.button<{ opacity: number }>`
  background: #ffd748;
  border-radius: 20px;
  border: none;

  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 35px;

  color: #423f45;

  padding: 2px 23px;

  opacity: ${(props) => props.opacity};


  @media (max-width: 460px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Play

export const PlayBox = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  border-radius: 40px;
  background-color: ${(props) => props.bg};

  max-height: 100vh;
  width: 1000px;

  @media (max-width: 950px) {
    padding: 20px;
    margin: 10px;
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 5px;
    margin: 5px;
  }
`;

export const ListItemsTheField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 400px;
  gap: 15px;
`;

export const ItemTheFieldWidth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: auto;

  @media (max-width: 650px) {
    width: 37%;
  }
  @media (max-width: 500px) {
    width: 42%;
  }
  @media (max-width: 400px) {
    width: 45%;
  }
`;

export const ItemTheField = styled.div`
  position: relative;
  width: 50%;
  height: auto;

  cursor: grab;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 80%;
    height: auto;

    @media (max-width: 950px) {
      width: 100%;
    }
  }
`;

export const ItemTheFieldText = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 44px;
  line-height: 55px;
  color: white;
  -webkit-text-stroke: 1.5px rgba(36, 37, 70, 1);

  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

// Play board

export const Board = styled.div<{ error: boolean; bg: string }>`
  background-color: ${(props) => props.bg};
  border-radius: 30px;

  width: 100%;
  padding: 20px;

  animation-iteration-count: 1;

  animation: ${(props) => (props.error ? wiggle : "none")} 1s linear;

  border: 4px solid ${(props) => (props.error ? "red" : "transparent")};

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const BoardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Direction = styled.div<{ type: "increasing" | "decreasing" }>`
  margin-top: 30px;

  display: flex;
  justify-content: ${(props) =>
    props.type === "decreasing" ? "flex-end" : "flex-start"};
  align-items: center;

    > p {
      color: white;
      font-weight: 500;
      font-size: 24px;
      margin: 0 10px;
    }
`;

export const BoardListItem = styled.div<{
  bg: "transparent" | "white";
  shadow: boolean;
}>`
  position: relative;
  width: 16.6%;
  height: 120px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${(props) => props.bg};
  box-shadow: ${(props) =>
    props.shadow ? "inset 0px 0px 13px 0px black" : "none"};

  > img {
    width: 80%;
    height: 100%;
  }

  @media (max-width: 750px) {
    height: 100px;
  }

  @media (max-width: 650px) {
    height: 80px;
  }

  @media (max-width: 500px) {
    height: 70px;
    width: 17.6%;
  }

  @media (max-width: 400px) {
    height: 50px;
    width: 18.6%;
  }
`;

// Modal end

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.608);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalEnd = styled.div`
  background: white;

  margin: 30px;
  max-width: 500px;
  gap: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 750px) {
    max-width: 400px;
  }

  @media (max-width: 550px) {
    max-width: 300px;
    margin: 10px 0;
  }

`;

export const ModalEndGradient = styled.div`
  position: relative;
  background: radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 10px,
        transparent 10px
      )
      0% 0%/30px 30px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 10px, transparent 10px)
      100% 0%/30px 30px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 10px, transparent 10px)
      0% 100%/30px 30px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 10px, transparent 10px)
      100% 100%/30px 30px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 40px)
      calc(100% - 60px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 60px)
      calc(100% - 40px) no-repeat,
    linear-gradient(0deg, transparent 0%, rgba(95, 221, 145, 0.69) 100%),
    linear-gradient(
      rgba(139, 101, 221, 0.27) 0%,
      rgba(141, 103, 223, 0.32) 100%
    );
  border-radius: 30px;
  padding: 33px;
  box-sizing: border-box;
`;

export const ModalEndTitle = styled.h1`
  text-shadow: 1px 1px 2px green;
  font-family: "Circe Rounded Alt ";
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 163px;

  color: gold;

  @media (max-width: 750px) {
    font-size: 100px;
    line-height: 140px;
  }
  @media (max-width: 550px) {
    font-size: 70px;
    line-height: 100px;
  }
`;

export const ModalEndText = styled.p`
  color: #5f40a1;
  font-weight: 400;
  font-size: 40px;
  line-height: 51px;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 32px;
    line-height: 44px;
  }

  @media (max-width: 550px) {
    font-size: 22px;
    line-height: 34px;
  }
`;

export const ModalEndStar = styled.div<{
  size: "small" | "middle" | "large";
  positionY: number;
  positionX: number;
}>`
  position: absolute;
  left: ${(props) => props.positionX}%;
  top: ${(props) => props.positionY}%;
  width: ${(props) =>
    (props.size === "large" && 300) ||
    (props.size === "middle" && 260) ||
    (props.size === "small" && 190)}px;
  height: ${(props) =>
    (props.size === "large" && 300) ||
    (props.size === "middle" && 260) ||
    (props.size === "small" && 190)}px;

  > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 650px) {
    display: none;
  }

`;
