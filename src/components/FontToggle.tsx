import { useState, useRef } from "react";
import { useDictionaryApp } from "../context";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { nanoid } from "nanoid";
import { styled } from "styled-components";

const fontOptions = ["space-grotesk", "roboto", "poppins"];

const FontToggle = () => {
  const { fontFamily, setFont } = useDictionaryApp();
  const [showDropDown, setShowDropDown] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleDropDown = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, right, bottom, top } =
      menuRef!.current!.getBoundingClientRect();

    if (
      clientX < left ||
      clientX > right ||
      bottom < clientY + 1 ||
      top > clientY + 2
    ) {
      setShowDropDown(false);
    }
  };

  return (
    <Wrapper className='font-container'>
      <button
        type='button'
        className='btn font-toggle'
        onClick={toggleDropDown}
      >
        {fontFamily}
        {showDropDown ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
      </button>
      <div
        ref={menuRef}
        className={showDropDown ? "fonts show-fonts" : "fonts"}
        onMouseLeave={handleDropDown}
      >
        {fontOptions.map((option) => {
          return (
            <p
              className='single-font'
              key={nanoid()}
              onClick={() => {
                setFont(option);
                setShowDropDown(!showDropDown);
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default FontToggle;

const Wrapper = styled.div`
  .font-container {
    position: relative;
    width: 10rem;
  }
  .font-toggle {
    padding: 0.375rem 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    background-color: transparent;
    color: inherit;

    svg {
      font-size: 1.25rem;
    }
  }
  .fonts {
    position: absolute;
    top: 120%;
    width: 100%;
    background-color: var(--backgroundColor);
    /* border: 2px solid var(--primary-500); */
    z-index: -1;
    opacity: 0;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    .single-font {
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.25rem;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
  .show-fonts {
    opacity: 1;
    z-index: 9;
  }
`;
