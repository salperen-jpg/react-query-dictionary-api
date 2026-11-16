import { BiPlay } from "react-icons/bi";
import { ISingleDef } from "../utils/Dictionary.Models";
interface IKeywordProps {
  definition: ISingleDef[];
}

const SoundButton = ({ definition }: IKeywordProps) => {
  const playSpeech = (word: string) => {
    if (!("speechSynthesis" in window)) {
      console.error("Speech synthesis is not supported by this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.onerror = (event) => {
      console.error(
        "Unable to play the synthesized pronunciation.",
        event.error,
      );
    };
    window.speechSynthesis.speak(utterance);
  };

  const playMusic = () => {
    const entry = definition?.[0];
    if (!entry) {
      console.error(
        "Cannot play pronunciation: no dictionary entry is available.",
      );
      return;
    }

    const audioUrl = entry.phonetics.find(({ audio }) => audio)?.audio;
    if (!audioUrl) {
      playSpeech(entry.word);
      return;
    }

    new Audio(audioUrl).play().catch((error: unknown) => {
      console.error(
        `Unable to play pronunciation audio from ${audioUrl}`,
        error,
      );
      playSpeech(entry.word);
    });
  };

  return (
    <button onClick={playMusic} className='btn sound-btn'>
      <BiPlay></BiPlay>
    </button>
  );
};
export default SoundButton;
