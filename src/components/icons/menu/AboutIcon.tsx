import React, { FC, memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {}

export const AboutIcon: FC<IProps> = memo(() => (
  <Svg width="24" height="24" fill={"#fff"}>
    <Path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
  </Svg>
));
