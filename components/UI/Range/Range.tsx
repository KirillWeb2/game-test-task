import React, { ChangeEvent, memo } from "react";
import {
  Range,
  RangeInput,
  RangeValues,
  RangeValuesItem,
} from "../../../assets/styles/components";

interface Props {
  onChange: (el: number | string) => void;
  values: any[];
  min: number;
  max: number;
  defaultValue: number | "A" | number[];
}

export default memo(({ defaultValue, onChange, values, min, max }: Props) => {
  const change = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(values[+e.target.value]);

  const getValue = (): number => {
    if (defaultValue === "A") {
      return 0;
    }
    if (typeof defaultValue === "object") {
      const params: { [id: number]: number } = {
        9: 1,
        19: 2,
        50: 3,
        99: 4,
        999: 5,
      };

      return params[defaultValue[1]];
    }

    const params: { [id: number]: number } = {
      2: 0,
      3: 1,
      4: 2,
      5: 3,
    };

    return params[defaultValue];
  };

  return (
    <Range>
      <RangeValues>
        {values.map((i, index) => {
          return (
            <RangeValuesItem
              key={index}
              left={
                index !== 0 ? `${(index * (100 / (values.length - 1))) - 1}` : "0"
              }
            >
              {i}
            </RangeValuesItem>
          );
        })}
      </RangeValues>
      <RangeInput
        defaultValue={getValue()}
        onChange={change}
        type="range"
        min={min}
        max={max}
      />
    </Range>
  );
});
