export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  title: string;
  bow: string;
  tag: string;
  red: string;
  sidebar: string;
  sidebarIcon: string;
  sidebarActiveText:string;
  sidebarActiveBack:string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  
  // Buttons
  button: string;

  // Extra
  extra: string;

  // Farming

  farming: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  linear: string;
  tradeprimarybg: string;
  tradeprimarytext: string;
  tradesecondarybg: string;
  tradesecondarytext: string;
  copyright: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
