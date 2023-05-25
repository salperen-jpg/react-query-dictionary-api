import { useContext, createContext, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { API_ENDPOINT, initialContextValues } from "./utils/constants";
import { grabBodyElement } from "./utils/helpers";
import {
  IChildrenProp,
  IContextType,
  ISingleDef,
} from "./utils/Dictionary.Models";

const DictionaryContext = createContext<IContextType>(initialContextValues);

const getInitialTheme = () => {
  const isDarkPreffered = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "false" ? false : isDarkPreffered;
};

export const AppProvider = ({ children }: IChildrenProp) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });
  const [definition, setDefinition] = useState<ISingleDef[] | undefined>();
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [fontFamily, setFontFamily] = useState("space-grotesk");

  const fetchDefinition = async (value: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios(`${API_ENDPOINT}/${value}`);
      toggleError();
      setDefinition(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        toggleError(true, "Word could not find...");
      } else {
        throw new Error("something went wrong");
      }
    }
    setIsLoading(false);
  };

  const toggleError = (show = false, msg = "") => {
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
    fetchDefinition("hello");
  }, []);

  useEffect(() => {
    grabBodyElement()!.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <DictionaryContext.Provider
      value={{
        isLoading,
        definition,
        isDarkTheme,
        fontFamily,
        isError,
        toggleTheme,
        setFont,
        fetchDefinition,
        toggleError,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryApp = () => useContext(DictionaryContext);
