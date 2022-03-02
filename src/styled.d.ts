import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      sky: string;
      wave: string;
      abyss: string;
      coral: string;
      coralDarken: string;
      violet: string;
    };
  }
}
