/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

function Question() {
  return (
    <div css={container}>
      <div css={question_div}>
        <p>약속이 취소된다면 나는?</p>
      </div>
      <div css={answer_div}>
        <Link to="/statistics">
          <button css={answer_btn}>너무 행복하다.</button>
        </Link>
        <Link to="/statistics">
          <button css={answer_btn}>기분은 좋지만 심심하다.</button>
        </Link>
        <Link to="/statistics">
          <button css={answer_btn}>약속 깬 친구에게 서운하다.</button>
        </Link>
        <Link to="/statistics">
          <button css={answer_btn}>진심으로 화가 난다.</button>
        </Link>
      </div>
    </div>
  );
}

const container = css`
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: hi 1.5s;

  @keyframes hi {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const question_div = css`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 3%;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;

const answer_div = css`
  width: 90%;
  height: 40%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;

  @media (min-width: 768px) {
    height: 50%;
  }
`;

const answer_btn = css`
  border-width: 1px;
  background-color: white;
  font-family: 'GmarketSansMedium';
  font-size: 20px;
  width: 100%;
  height: 3em;
  padding: 10px;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
  }
`;

export default Question;
