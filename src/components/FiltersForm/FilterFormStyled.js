import styled from "styled-components";

export const FilterFormStyled = styled.form`
margin-top: 40px;
  display: flex;
  justify-content: center;
  column-gap: 18px;
  align-items: end;
  margin-bottom: 50px;
  .label-container {
    display: flex;
    flex-direction: column;
  }

  label,
  .label-mileage {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.27;
    margin-bottom: 8px;
  }

  select {
    padding: 14px 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }

  select {
    background-color: #f7f7fb;
    border: none;
    border-radius: 14px;
  }
  .btn-container {
    display: flex;
    gap: 8px;
  }
  .accept-btn,
  .reset-btn {
    color: #ffffff;
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background-color: #3470ff;
  }


  button {
    transition: transform 250ms linear;
  }
  button:hover,
  button:focus {
    background-color: blue;
  }

  option {
    color: rgba(18, 20, 23, 0.2);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }

  select::-webkit-scrollbar {
    width: 8px;
  }

  .arrow-svg {
    position: absolute;
    bottom: 18px;
    right: 18px;
    pointer-events: none;
  }

  .label-container {
    position: relative;
  }

  .brand-container {
    width: 224px;
  }
  .price-container {
    width: 125px;
  }

  .brand-svg,
  .price-svg {
    transition: transform 250ms linear;
  }

  .brand-svg {
    transform: ${(props) => (props.$brandFocus ? "none" : "rotate(180deg)")};
  }

  .price-svg {
    transform: ${(props) => (props.$priceFocus ? "noinpne" : "rotate(180deg)")};
  }

 
  .input-container {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    width: 160px;
  }

  .input-container input {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    padding-left: 3px;
  }

  .input-container label {
    margin-bottom: 0;
  }
  .input-container label,
  .input-container input,
  select {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: var(--primary-text-color);
  }

  .left {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  input {
    max-width: 100%;
  }
`;