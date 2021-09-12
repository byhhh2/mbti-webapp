/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import '../css/mainComponent.css';
import question from '../images/question.png';
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    <div className="mainComponent">
      <div>
        <p css={topText}>나와 같은 MBTI는</p>
        <p css={botText}>어떤 생각을 할까 ?</p>
      </div>
      <img src={question} css={img} alt="question" />
      <Link to="/write">
        <button css={btn}>생각 훔쳐보기</button>
      </Link>
      <p className="question_mark">?</p>
    </div>
  );
}

const topText = css`
  margin-right: 50px;
  font-size: 30px;
  margin-block-end: 0em;
  margin-block-start: 0em;

  @media (max-width: 375px) {
    font-size: 23px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const botText = css`
  margin-left: 50px;
  font-size: 30px;
  margin-block-end: 0em;
  margin-block-start: 0em;

  @media (max-width: 375px) {
    font-size: 23px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const img = css`
  width: 250px;
  height: 250px;
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

const btn = css`
  border-width: 1px;
  background-color: white;
  font-family: 'GmarketSansMedium';
  font-size: 25px;
  color: #875611;
  padding: 10px;
  border-radius: 20px;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 375px) {
    font-size: 25px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }

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

export default MainComponent;
