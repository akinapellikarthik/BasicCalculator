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
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

export const CalculatorTextBoxComponent: React.FC<{}> = () => {
  const {result,firstValue,secondValue} = useSelector(
    (state: RootState) => state.CalculatorSlice
  );

  return (
    <>
      <TextField
        id="outlined-read-only-input"
        label="Basic Calculator"
        value={firstValue}
      />
      <TextField
        id="outlined-read-only-input"
        label="Basic Calculator"
        value={secondValue}
      />
    </>
  );
};
