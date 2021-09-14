/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useStateContext } from '../context/Context';
import question_img from '../images/question.png';
import styled from 'styled-components';
import Comment from './Comment';

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
      <div css={this_statistics_div}>
        {Percentage('너무 행복하다.', 10)}
        {Percentage('기분은 좋지만 심심하다.', 40)}
        {Percentage('약속 깬 친구에게 서운하다.', 30)}
        {Percentage('진심으로 화가 난다.', 20)}
      </div>
      <div css={total_statistics_container}>
        <div css={total_statistics_div_container}>
          <div css={total_statistics_div}>
            <p css={total_statistics_title}>너무 행복하다.</p>
            <div css={other_div}>
              {Percentage('1위 ENTP', 70)}
              {Percentage('2위 ENFP', 20)}
              {Percentage('3위 ISTP', 10)}
              <div css={my_div}>{Percentage('1위 ENTP', 70)}</div>
            </div>
          </div>
          <div css={total_statistics_div}>
            <p css={total_statistics_title}>기분은 좋지만 심심하다.</p>
            <div css={other_div}>
              {Percentage('1위 ENTP', 70)}
              {Percentage('2위 ENFP', 20)}
              {Percentage('3위 ISTP', 10)}
              <div css={my_div}>{Percentage('1위 ENTP', 70)}</div>
            </div>
          </div>
        </div>
        <div css={total_statistics_div_container}>
          <div css={total_statistics_div}>
            <p css={total_statistics_title}>약속 깬 친구에게 서운하다.</p>
            <div css={other_div}>
              {Percentage('1위 ENTP', 70)}
              {Percentage('2위 ENFP', 20)}
              {Percentage('3위 ISTP', 10)}
              <div css={my_div}>{Percentage('1위 ENTP', 70)}</div>
            </div>
          </div>
          <div css={total_statistics_div}>
            <p css={total_statistics_title}>진심으로 화가 난다.</p>
            <div css={other_div}>
              {Percentage('1위 ENTP', 70)}
              {Percentage('2위 ENFP', 20)}
              {Percentage('3위 ISTP', 10)}
              <div css={my_div}>{Percentage('1위 ENTP', 70)}</div>
            </div>
          </div>
        </div>
      </div>
      <div css={btn_container}>
        <button css={ok_btn}>NEXT</button>
        <button css={ok_btn}>질문 추가하기</button>
      </div>
      <div css={comment_container}>
        <Comment />
      </div>
    </div>
  );
}

const Percentage = (item: string, per: number) => {
  return (
    <PercentageContainer>
      <Per per={per} />
      <div css={percentage_text_div}>
        <p css={text}>
          {item} ({per.toFixed(1)}%)
        </p>
      </div>
    </PercentageContainer>
  );
};

const container = css`
  height: 2000px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
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

  animation: hi 3s;
`;

const img_bottom = css`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 110px;
  left: 10px;
  transform: rotate(-0.05turn);

  animation: hi 5s;
`;

const title_text_left = css`
  font-size: 50px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  color: black;
  font-weight: bold;
  font-family: 'Cafe24Shiningstar';
`;

const title_text_right = css`
  font-size: 50px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  margin-left: 70px;
  color: black;
  font-weight: bold;
  font-family: 'Cafe24Shiningstar';
`;

const title_div = css`
  margin-top: 40px;
`;

const this_statistics_div = css`
  width: 80%;
  height: 250px;
  margin-top: 80px;
  border: 3px dashed rgba(245, 228, 217, 0.8);
  padding: 5%;
  border-radius: 15px;
`;

const Per = styled.div<{ per: number }>`
  background-color: rgba(245, 228, 217, 0.8);
  width: ${(props: any) => props.per}%;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  margin-top: 25px;
  position: relative;
`;

const percentage_text_div = css`
  position: absolute;
  top: 0px;
  width: 100%;
  margin-left: 10px;
`;

const text = css`
  margin-block-start: 0.2em;
  margin-block-end: 0em;
`;

const total_statistics_container = css`
  width: 90%;
  height: 31%;
  margin-top: 60px;
`;

const total_statistics_div_container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const total_statistics_div = css`
  width: 48%;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const total_statistics_title = css`
  position: absolute;
  top: -12px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-family: 'Cafe24Shiningstar';
`;

const other_div = css`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  padding: 3%;
`;

const my_div = css`
  color: #875611;
  font-weight: bold;
`;

const btn_container = css`
  display: flex;
  flex-direction: column;
`;

const ok_btn = css`
  border-width: 1px;
  background-color: white;
  font-family: 'GmarketSansMedium';
  font-size: 25px;
  color: #875611;
  font-weight: bold;
  width: 10em;
  height: 2em;
  padding: 10px;
  border-radius: 20px;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`;

const comment_container = css`
  width: 80%;
  height: 500px; //auto
  // border: 1px solid black;
  padding: 5%;
  margin-top: 70px;
`;

export default Statistics;
