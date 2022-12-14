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
import { Grid } from "@mui/material";
import React from "react";
import { CalcButtonComponent } from "../CalculatorButton/CalcButtonComponent";
import { CalConstants } from "../../CalConstants";
import { CalculatorTextBoxComponent } from "../CalculatorTextBox/CalculatorTextBoxComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

export const CalculatorComponent: React.FC<{}> = () => {
  const {result,firstValue} = useSelector(
    (state: RootState) => state.CalculatorSlice
  );
  return (
    <>
      {/*TODO: Move the padding to a different style */}
      <Grid container spacing={0} style={{ paddingLeft: 500, paddingTop: 300 }}>
        <Grid item xs={8}>
          <CalculatorTextBoxComponent />
        </Grid>
        <Grid item xs={8}>
          {CalConstants.calBtnSymbol123.map((item) => (
            <CalcButtonComponent symbol={item} />
          ))}
        </Grid>
        <Grid item xs={8}>
          {CalConstants.calBtnSymbol456.map((item) => (
            <CalcButtonComponent symbol={item} />
          ))}
        </Grid>
        <Grid item xs={8}>
          {CalConstants.calBtnSymbol789.map((item) => (
            <CalcButtonComponent symbol={item} />
          ))}
        </Grid>
        <Grid item xs={8}>
          {CalConstants.calBtnSymbolzeroPlusMinus.map((item) => (
            <CalcButtonComponent symbol={item} />
          ))}
        </Grid>
        <Grid item xs={8}>
          {CalConstants.calBtnSetValues.map((item) => (
            <CalcButtonComponent symbol={item} />
          ))}
        </Grid>
      </Grid>
      {firstValue}
    </>
  );
};
