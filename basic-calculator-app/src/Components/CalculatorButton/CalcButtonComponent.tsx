import { Button } from "@mui/material";
import React from "react";

export interface CalcSymbol {
  symbol: string;
}

export const CalcButtonComponent: React.FC<CalcSymbol> = ({
  symbol,
}: CalcSymbol) => {
  return (
    <React.Fragment>
      <Button variant="outlined">{symbol}</Button>
    </React.Fragment>
  );
};
