const colors = {
  green: "#065755",
  yellow: "#fff4da",
  lightYellow: "#fffaeb",
};

const borderRadius = {
  default: "24px",
  small: "4px",
};

const fullTheme = {
  colors,
  borderRadius,
};

export type Theme = typeof fullTheme;
export const theme: Theme = fullTheme;
