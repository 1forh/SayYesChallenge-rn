export const colors = {
  black: '#090909',
  white: '#fff',
  gray: {
    800: '#1C2125',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    background: colors.gray[800],
    backgroundSecondary: colors.black,
    backgroundTertiary: '#2B2B28',
    shadow: colors.black,
    border: 'rgb(39, 39, 41)',
    card: 'rgb(18, 18, 18)',
    primary: 'rgb(10, 132, 255)',
    text: colors.white,
    placeholderText: 'rgba(255, 255, 255, 0.3)',
  },
};

export const defaultTheme = {
  dark: false,
  colors: {
    background: colors.white,
    backgroundSecondary: colors.gray[800],
    backgroundTertiary: colors.gray[800],
    shadow: colors.gray[800],
    border: 'rgb(224, 224, 224)',
    card: 'rgb(255, 255, 255)',
    primary: 'rgb(0, 122, 255)',
    text: colors.black,
    placeholderText: 'rgba(0, 0, 0, 0.3)',
  },
};
