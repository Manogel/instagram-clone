import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 580px;
`;

export const PostList = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
`;

export const Picture = styled.img`
  width: 100%;
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      font-weight: bold;
    }

    span#place {
      font-size: 11px;
      color: #666;
      margin-top: 3px;
    }
  }
`;

export const Bottom = styled.footer`
  padding: 20px;

  p {
    font-size: 13px;
    margin-top: 3px;
    line-height: 18px;

    span {
      color: #00f;
      display: block;
    }
  }
`;

export const Actions = styled.div`
  margin-bottom: 10px;

  img {
    margin-right: 10px;
    height: 20px;
  }
  button {
    background: transparent;
    margin: 0;
    border: 0;
    cursor: pointer;
  }
`;
