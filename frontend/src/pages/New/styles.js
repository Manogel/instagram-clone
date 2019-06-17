import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input#photo {
    display: none;
  }
`;

export const InputFile = styled.label`
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  background: #7159c1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  img {
    height: 12px;
    margin-right: 8px;
    color: #fff;
    align-items: center;
    filter: invert(100%);
  }
`;

export const Input = styled.input`
  height: 38px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  background: #7159c1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
