export const API_ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const initialContextValues = {
  isLoading: false,
  isError: {
    show: false,
    msg: "",
  },
  definition: undefined,
  isDarkTheme: false,
  fontFamily: "space-grotesk",
  toggleTheme: () => {},
  setFont: () => {},
  fetchDefinition: () => {},
  toggleError: () => {},
};
