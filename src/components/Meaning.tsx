import { styled } from "styled-components";
import { nanoid } from "nanoid";
import { IMeaning } from "../utils/Dictionary.Models";
const Meaning: React.FC<IMeaning> = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) => {
  const getSynonmys = () => {
    if (synonyms.length === 1) {
      return synonyms[0];
    }
    let newString: string = "";
    synonyms.forEach((syn, index) => {
      newString += index === synonyms.length - 1 ? syn : `${syn},`;
    });
    return newString;
  };
  const getAntonyms = () => {
    if (synonyms.length === 1) {
      return antonyms[0];
    }
    let newString: string = "";
    antonyms.forEach((syn, index) => {
      newString += index === antonyms.length - 1 ? syn : `${syn},`;
    });
    return newString;
  };

  return (
    <Wrapper>
      <header>
        <span className='partOfSpeech'>{partOfSpeech}</span>
        <hr />
      </header>
      <h4>meaning</h4>
      <ul>
        {definitions.map((d) => {
          return (
            <li key={nanoid()}>
              <span>
                <span>{d.definition}</span>
                <p className='example'>{d.example}</p>
              </span>
            </li>
          );
        })}
      </ul>
      {synonyms.length > 0 && (
        <div className='other-words'>
          <span className='syn'>synonyms</span>
          <span className='list'>{getSynonmys()}</span>
        </div>
      )}
      {antonyms.length > 0 && (
        <div className='other-words'>
          <span className='acr'>acronyms</span>
          <span className='list'>{getAntonyms()}</span>
        </div>
      )}
    </Wrapper>
  );
};
export default Meaning;

const Wrapper = styled.article`
  header {
    margin-bottom: 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 3rem;
    span {
      text-transform: capitalize;
      letter-spacing: 1px;
      font-style: italic;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  h4 {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
  }
  li {
    position: relative;
    display: block;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  li::before {
    content: "*";
    position: absolute;
    top: 0rem;
    left: 0rem;
    color: var(--primary-500);
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
  .example {
    color: var(--grey-500);
  }
  .other-words {
    margin: 2rem 0;
    display: flex;
    gap: 1.4rem;
    .syn,
    .acr {
      font-size: 1.3rem;
      text-transform: capitalize;
    }
    .list {
      font-size: 0.9rem;
      color: var(--primary-500);
      display: flex;
      align-self: flex-end;
    }
  }
`;
