const colors = {
  green: "#065755",
  yellow: "#fff4da",
};

const borderRadius = {
  default: "24px",
};

const fullTheme = {
  colors,
  borderRadius,
};

export type Theme = typeof fullTheme;
export const theme: Theme = fullTheme;
