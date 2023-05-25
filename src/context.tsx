import { useContext, createContext, useState, useEffect } from "react";
import { initialContextValues } from "./utils/constants";
import { grabBodyElement } from "./utils/helpers";
import { IChildrenProp, IContextType } from "./utils/Dictionary.Models";

const DictionaryContext = createContext<IContextType>(initialContextValues);

const getInitialTheme = () => {
  const isDarkPreffered = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "false" ? false : isDarkPreffered;
};

export const AppProvider = ({ children }: IChildrenProp) => {
  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [fontFamily, setFontFamily] = useState("space-grotesk");
  const [searchQuery, setSearchQuery] = useState("hello");

  const toggleError = (show?: boolean, msg?: string) => {
    show = show === undefined ? false : show;
    msg = msg === undefined ? "" : msg;
    setIsError({ show, msg });
  };

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  const setFont = (value: string) => {
    const bodyElement = grabBodyElement();
    bodyElement?.classList.remove(fontFamily);
    const newFont = value;
    setFontFamily(newFont);
    bodyElement?.classList.add(newFont);
  };

  useEffect(() => {
    grabBodyElement()!.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <DictionaryContext.Provider
      value={{
        isDarkTheme,
        fontFamily,
        isError,
        toggleTheme,
        setFont,
        toggleError,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryApp = () => useContext(DictionaryContext);
