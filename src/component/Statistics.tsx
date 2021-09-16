/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useStateContext } from '../context/Context';
import question_img from '../images/question.png';
import styled from 'styled-components';
import Comment from './Comment';

function Statistics({ match }: any) {
  const state = useStateContext();

  const selectedStyle = (num: string) => {
    return match.params.num === num
      ? ({
          fontWeight: 'bold',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
        } as const)
      : ({ color: 'black' } as const);
  };

  return (
    <div css={container}>
      <div css={title_div}>
        <p css={title_text_left}>{state.mbti} 는 </p>
        <p css={title_text_right}>무슨 생각을 할까?</p>
      </div>
      <img src={question_img} css={img_top} alt="question" />
      <img src={question_img} css={img_bottom} alt="question" />
      <div css={this_statistics_div}>
        <div id="no1" style={selectedStyle('1')}>
          {Percentage('너무 행복하다.', 10)}
        </div>
        <div id="no2" style={selectedStyle('2')}>
          {Percentage('기분은 좋지만 심심하다.', 40)}
        </div>
        <div id="no3" style={selectedStyle('3')}>
          {Percentage('약속 깬 친구에게 서운하다.', 30)}
        </div>
        <div id="no4" style={selectedStyle('4')}>
          {Percentage('진심으로 화가 난다.', 20)}
        </div>
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
  height: auto;
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

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }
`;

const img_bottom = css`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 110px;
  left: 10px;
  transform: rotate(-0.05turn);

  animation: hi 5s;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }
`;

const title_text_left = css`
  font-size: 40px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  color: black;
  font-weight: bold;
  font-family: 'Cafe24Shiningstar';

  @media (min-width: 375px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

const title_text_right = css`
  font-size: 40px;
  margin-block-end: 0em;
  margin-block-start: 0em;
  margin-left: 70px;
  color: black;
  font-weight: bold;
  font-family: 'Cafe24Shiningstar';

  @media (min-width: 375px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
  }
`;

const title_div = css`
  margin-top: 40px;
`;

const this_statistics_div = css`
  width: 80%;
  height: auto;
  margin-top: 12%;
  border: 3px dashed rgba(245, 228, 217, 0.8);
  padding: 5%;
  border-radius: 15px;

  #no1 {
    animation: hi 1.5s;
  }

  #no2 {
    animation: hi 2.5s;
  }

  #no3 {
    animation: hi 3.5s;
  }

  #no4 {
    animation: hi 4.5s;
  }
`;

const Per = styled.div<{ per: number }>`
  background-color: rgba(245, 228, 217, 0.8);
  width: ${(props: any) => props.per}%;
  height: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) {
    height: 25px;
  }
  @media (min-width: 375px) {
    height: 30px;
  }
  @media (min-width: 768px) {
    height: 35px;
  }
  @media (min-width: 1240px) {
    height: 50px;
  }
  @media (min-width: 1440px) {
    height: 60px;
  }
  @media (min-width: 1600px) {
    height: 70px;
  }
`;

const PercentageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 25px;
  border-radius: 10px;
  margin: 5% 0;
  position: relative;

  @media (min-width: 320px) {
    height: 25px;
  }
  @media (min-width: 375px) {
    height: 30px;
  }
  @media (min-width: 768px) {
    height: 35px;
  }
  @media (min-width: 1240px) {
    height: 50px;
  }
  @media (min-width: 1440px) {
    height: 60px;
  }
  @media (min-width: 1600px) {
    height: 70px;
  }
`;

const percentage_text_div = css`
  position: absolute;
  top: 0px;
  width: 100%;
  margin-left: 10px;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 375px) {
    font-size: 14px;
  }
  @media (min-width: 425px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
  }
`;

const text = css`
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const total_statistics_container = css`
  width: 90%;
  height: auto;
  margin-top: 10%;

  animation: hi 5s;
`;

const total_statistics_div_container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10%;
`;

const total_statistics_div = css`
  width: 48%;
  height: auto;
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
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-family: 'Cafe24Shiningstar';

  @media (min-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 425px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

const other_div = css`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  padding: 5%;
`;

const my_div = css`
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

const btn_container = css`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  height: auto;
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
  height: auto;
  padding: 5%;
  margin-top: 10%;
  border-radius: 20px;
  border: 0.001px solid black;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

export default Statistics;
