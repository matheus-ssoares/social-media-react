import 'styled-components';

type CustomTheme = {
  body: string;
  lines: string;
  primaryText: string;
  labelText: string;
  inputBackground: string;
  inputTextColor: string;
  commentBox: string;
  menuHoverColor: string;
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
