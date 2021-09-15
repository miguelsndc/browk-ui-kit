import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      disabled: string;
      primary: string;
      hover: string;
      active: string;
      white: string;
      whiteS: string;
      grayM: string;
      grayL: string;
      grayS: string;
      gray: string;
      grayK: string;
      black: string;
      redGirl: string;
      redBoy: string;
      red: string;
      superRed: string;
      green: string;
      blue: string;
    };
    fonts: {
      BlackHeading1: string;
      H2BoldMontserrat: string;
      H3BoldMontserrat: string;
      H4BoldMontserrat: string;
      H5BoldMontserrat: string;
      H6BoldMontserrat: string;
      P1RegularRoboto: string;
      P2RegularRoboto: string;
      P3RegularRoboto: string;
      P1RegularRobotoBold: string;
      P2RegularMedium: string;
      P3RegularRobotoBold: string;
    };
    shadows: {
      default: string;
      inputError: string;
      inputSuccess: string;
      hover: string;
      active: string;
    };
  }
}
