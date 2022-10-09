/*
 * Copyright 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addition,
  setFirstValue,
  setSecondValue,
  subtraction,
} from "../../Slices/CalculatorSlice";

export interface CalcSymbol {
  symbol: string;
}

export const CalcButtonComponent: React.FC<CalcSymbol> = ({
  symbol,
}: CalcSymbol) => {
  const dispatch = useDispatch();

  const [firstClicked, isFirstClicked] = useState<boolean>(true);
  const [secondClicked, isSecondClicked] = useState<boolean>(false);

  const handleCalculatorButtonClick = (symbol: string) => {
    if (symbol === "+") {
      isSecondClicked(true);
    } else if (symbol === "-") {
      isSecondClicked(true);
    } else if (firstClicked) {
      dispatch(setFirstValue({ firstValue: symbol, secondValue: "" }));
    } else if (secondClicked) {
      dispatch(setSecondValue({ firstValue: "", secondValue: symbol }));
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={() => handleCalculatorButtonClick(symbol)}
      >
        {symbol}
      </Button>
    </React.Fragment>
  );
};
