export const API_ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const initialContextValues = {
  isError: {
    show: false,
    msg: "",
  },
  isDarkTheme: false,
  fontFamily: "space-grotesk",
  toggleTheme: () => {},
  setFont: () => {},
  toggleError: () => {},
  searchQuery: "hello",
  setSearchQuery: () => {},
};
