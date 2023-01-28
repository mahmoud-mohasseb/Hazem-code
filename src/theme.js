import { createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {
    Button: {
      type: "solid",
      titleStyle: {
        color: "white",
      },
    },
  },
  lightColors: {
    primary: "#e7e7e8",
    Text: {
      color: "red",
    },
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

export default theme;
