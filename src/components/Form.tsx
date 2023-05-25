import { FaSearch } from "react-icons/fa";
import { useDictionaryApp } from "../context";
import { styled } from "styled-components";
import { useRef } from "react";
const Form = () => {
  const { fetchDefinition, isError, toggleError } = useDictionaryApp();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (null !== inputRef.current) {
      const value = inputRef.current.value;
      toggleError(true, "Please enter a word.");
      if (!value) return;
      fetchDefinition(value);
    }
  };

  return (
    <Wrapper>
      <form className='section-center form' onSubmit={handleSubmit}>
        <div className='form-container'>
          <input
            ref={inputRef}
            type='text'
            name='word'
            className={isError.show ? `form-input red-border` : `form-input`}
            placeholder='search for keyword...'
          />
          <button type='submit' className='btn submit-btn'>
            <FaSearch />
          </button>
        </div>
        {isError.show && <p className='error'>{isError.msg}</p>}
      </form>
    </Wrapper>
  );
};
export default Form;

const Wrapper = styled.section`
  .form-container {
    position: relative;
    height: 4rem;
  }

  .form-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 4rem;
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    font-family: inherit;
    letter-spacing: var(--letterSpacing);
    font-size: 1rem;
    font-weight: 700;
    border: transparent;
    outline: none;
    background-color: var(--grey-100);
    color: inherit;
  }

  .form-input:focus {
    border: 2px solid var(--primary-900);
  }
  .form-input::placeholder {
    text-transform: capitalize;
  }

  .red-border {
    border: 2px solid var(--red-dark);
  }

  .submit-btn {
    position: absolute;
    padding: 0.5rem 1rem;
    display: block;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: transparent;
    color: var(--primary-900);
    svg {
      font-size: 1.5rem;
    }
  }
`;
