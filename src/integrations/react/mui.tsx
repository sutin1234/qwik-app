/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Button, Slider } from "@mui/material";

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });
