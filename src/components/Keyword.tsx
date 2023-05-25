import { useDictionaryApp } from "../context";
import { BiPlay } from "react-icons/bi";
import { styled } from "styled-components";
const Keyword = () => {
  const { definition } = useDictionaryApp();
  const { word, phonetics } = definition![0];

  const getText = () => {
    return phonetics.find((a: any) => a.text)?.text || "";
  };

  const getAudio = () => {
    return phonetics.find((a: any) => a.audio)!.audio;
  };

  const playMusic = () => {
    let audio = new Audio(getAudio());
    audio.play();
  };

  return (
    <Wrapper>
      <div className='section-center keyword-center'>
        <div>
          <h1>{word}</h1>
          <span>{getText()}</span>
        </div>
        <button onClick={playMusic} className='btn sound-btn'>
          <BiPlay></BiPlay>
        </button>
      </div>
    </Wrapper>
  );
};
export default Keyword;

const Wrapper = styled.section`
  .keyword-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sound-btn {
    padding: 0 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    svg {
      font-size: 2.25rem;
    }
  }
`;
