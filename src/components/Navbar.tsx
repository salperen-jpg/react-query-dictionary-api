import { styled } from "styled-components";
import logo from "../assets/logo.svg";
import { useDictionaryApp } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import FontToggle from "./FontToggle";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useDictionaryApp();

  return (
    <Wrapper>
      <div className='nav-center section-center '>
        <img src={logo} className='logo' alt='dictionary' />
        <div className='nav-center-right'>
          <FontToggle />
          <div className='theme'>
            <button className='btn theme-btn' onClick={toggleTheme}>
              {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .nav-center-right {
    display: flex;
    align-items: center;
    gap: 1rem;

    .theme-btn {
      background-color: transparent;
      color: var(--primary-500);
      transition: all 0.3s ease-in-out;
      svg {
        font-size: 1.5rem;
      }
    }
    .theme-btn:hover {
      transform: rotate(180deg);
    }
  }
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
    border: 2px solid var(--primary-500);
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
