export interface IChildrenProp {
  children: React.ReactNode;
}

export interface IContextType {
  isLoading: boolean;
  isError: {
    show: boolean;
    msg: string;
  };
  definition: ISingleDef[] | undefined;
  isDarkTheme: boolean;
  fontFamily: string;
  toggleTheme: () => void;
  setFont: (value: string) => void;
  fetchDefinition: (value: string) => void;
  toggleError: (show: boolean, msg: string) => void;
}

export interface IPhonetic {
  audio?: string;
  sourceUri?: string;
  text?: string;
  license?: {
    name: string;
    uri: string;
  };
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
  sourceUrls: string;
}

export interface ISingleDef {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}
