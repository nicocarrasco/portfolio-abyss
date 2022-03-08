import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      sky: string;
      wave: string;
      abyss1stFloor: string;
      abyss2ndFloor: string;
      abyss3rdFloor: string;
      void: string;
      coral: string;
      coralDarken: string;
      violet: string;
    };
  }
}
