/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function WriteMbti() {
  return (
    <div css={container}>
      <div>
        <p css={text}>당신의 MBTI를</p>
        <p css={text}>입력하세요 🔨</p>
      </div>
      <SelectMbti />
      <div>
        <button css={ok_btn}>NEXT</button>
      </div>
    </div>
  );
}

const SelectMbti = () => {
  const createSelect = (arr: String[]) => {
    return arr.map((data: String, index: number) => (
      <div css={select_row} key={index}>
        <div>
          <input
            type="radio"
            id={`${data.split(' ')[0]}`}
            name={`${data.split(' ')[2]}`}
            value={`${data.split(' ')[0]}`}
            css={select_radio_btn}
          />
          <label htmlFor={`${data.split(' ')[0]}`} css={select_label}>
            {`${data.split(' ')[0]}`}
          </label>
        </div>
        <span css={versus}>VS</span>
        <div>
          <input
            type="radio"
            id={`${data.split(' ')[1]}`}
            name={`${data.split(' ')[2]}`}
            value={`${data.split(' ')[1]}`}
            css={select_radio_btn}
          />
          <label htmlFor={`${data.split(' ')[1]}`} css={select_label}>
            {`${data.split(' ')[1]}`}
          </label>
        </div>
      </div>
    ));
  };

  return (
    <div css={select_container}>
      {createSelect([
        'E I energy',
        'S N recognize',
        'T F judgment',
        'J P lifestyle',
      ])}
    </div>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

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

const select_container = css`
  background-color: white;
  padding: 3%;
  width: 90%;
  height: 50%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const text = css`
  font-size: 30px;
  margin-block-end: 0em;
  margin-block-start: 0em;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1440px) {
    font-size: 60px;
  }
`;

const select_row = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const select_label = css`
  font-size: 30px;
  color: black;
  width: 40px;
  display: inline-block;
  text-align: center;

  input:checked + & {
    color: #875611;
    font-weight: bold;
    text-shadow: -1px 0 #875611, 0 1px #875611, 1px 0 #875611, 0 -1px #875611;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const versus = css`
  font-size: 20px;
  width: 50px;
  height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const select_radio_btn = css`
  display: none;
`;

const ok_btn = css`
  border-width: 1px;
  background-color: white;
  font-family: 'GmarketSansMedium';
  font-size: 25px;
  color: #875611;
  font-weight: bold;
  width: 5em;
  height: 2em;
  padding: 10px;
  border-radius: 20px;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;

export default WriteMbti;
