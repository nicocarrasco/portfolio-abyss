import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      sky: string;
      wave: string;
      abyss1stFloor: string;
      abyss2ndFloor: string;
      coral: string;
      coralDarken: string;
      violet: string;
    };
  }
}
