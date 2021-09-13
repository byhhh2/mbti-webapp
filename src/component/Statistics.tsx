/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useStateContext } from '../context/Context';
import question_img from '../images/question.png';

function Statistics() {
  const state = useStateContext();

  return (
    <div css={container}>
      <div css={title_div}>
        <p css={title_text_left}>{state.mbti} 는 </p>
        <p css={title_text_right}>무슨 생각을 할까?</p>
      </div>
      <img src={question_img} css={img_top} alt="question" />
      <img src={question_img} css={img_bottom} alt="question" />
      <div>
        <p>너무 행복하다 </p>
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

const img_top = css`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 10px;
  transform: rotate(0.05turn);
`;

const img_bottom = css`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 110px;
  left: 10px;
  transform: rotate(-0.05turn);
`;

const title_text_left = css`
  font-size: 30px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  color: #875611;
  font-weight: bold;
`;

const title_text_right = css`
  font-size: 30px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  margin-left: 70px;
  color: #875611;
  font-weight: bold;
`;

const title_div = css`
  margin-top: 40px;
`;

export default Statistics;
