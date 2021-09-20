/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useDispatchContext } from '../context/Context';
import { Link } from 'react-router-dom';

type SelectMbtiProps = {
  MBTI: mbtiType;
  setMBTI: (arg: any) => void;
};

type mbtiType = {
  energy: string;
  recognize: string;
  judgment: string;
  lifestyle: string;
};

function WriteMbti() {
  const dispatch = useDispatchContext();

  const setMbti = (mbti: String) => dispatch({ type: 'SET_MBTI', mbti: mbti });

  const [MBTI, setMBTI] = useState<mbtiType>({
    energy: '',
    recognize: '',
    judgment: '',
    lifestyle: '',
  });

  const clickNext = () => {
    setMbti(MBTI.energy + MBTI.recognize + MBTI.judgment + MBTI.lifestyle);
    localStorage.setItem(
      'mbti',
      MBTI.energy + MBTI.recognize + MBTI.judgment + MBTI.lifestyle
    );
  };

  return (
    <div css={container}>
      <div>
        <p css={text}>당신의 MBTI를</p>
        <p css={text}>입력하세요 🔨</p>
      </div>
      <SelectMbti MBTI={MBTI} setMBTI={setMBTI} />
      <div>
        {(MBTI.energy + MBTI.recognize + MBTI.judgment + MBTI.lifestyle)
          .length === 4 ? (
          <Link to="/question">
            <button css={ok_btn} onClick={clickNext}>
              NEXT
            </button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const SelectMbti = ({ MBTI, setMBTI }: SelectMbtiProps) => {
  const createSelect = (arr: String[]) => {
    const inputEventHandler = (value: string) => {
      switch (value) {
        case 'E':
        case 'I':
          setMBTI({ ...MBTI, energy: value });
          return;
        case 'S':
        case 'N':
          setMBTI({ ...MBTI, recognize: value });
          return;
        case 'T':
        case 'F':
          setMBTI({ ...MBTI, judgment: value });
          return;
        case 'J':
        case 'P':
          setMBTI({ ...MBTI, lifestyle: value });
          return;
      }
    };

    return arr.map((data: String, index: number) => (
      <div css={select_row} key={index}>
        <div>
          <input
            type="radio"
            id={`${data.split(' ')[0]}`}
            name={`${data.split(' ')[2]}`}
            value={`${data.split(' ')[0]}`}
            onChange={(event) => {
              inputEventHandler(event.target.value);
            }}
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
            onChange={(event) => {
              inputEventHandler(event.target.value);
            }}
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
  @media (min-width: 1440px) {
    width: 50%;
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
