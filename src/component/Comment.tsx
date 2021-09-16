/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';

type message = {
  text: string;
  mbti: string;
  like: number;
};

function Comment() {
  return (
    <div css={container}>
      <p css={title}>COMMENT</p>
      <div css={input_div}>
        <input type="text" css={input} />
        <button css={input_btn}>💬</button>
      </div>
      <div css={comments_div}>
        <Item text={'이건 모함이다.'} mbti={'ENTP'} like={20} />
        <Item text={'와 찰떡'} mbti={'INFP'} like={20} />
        <Item text={'이건 모함이다.'} mbti={'ENTP'} like={20} />
        <Item text={'와 찰떡'} mbti={'INFP'} like={20} />
      </div>
    </div>
  );
}

const Item = ({ text, mbti, like }: message) => {
  const [isLike, setIsLike] = useState(false);
  const [totalLike, setTotalLike] = useState(like);

  return (
    <div css={item_div}>
      <p css={item_name_text}>지나가던 {mbti}</p>
      <p css={item_text}>{text}</p>
      <div css={item_like_div}>
        {isLike ? (
          <AiTwotoneLike
            onClick={() => {
              setIsLike(!isLike);
              setTotalLike(totalLike - 1);
            }}
          />
        ) : (
          <AiOutlineLike
            onClick={() => {
              setIsLike(!isLike);
              setTotalLike(totalLike + 1);
            }}
          />
        )}
        <span css={like_span}>{totalLike}</span>
      </div>
    </div>
  );
};

const container = css`
  width: 100%;
  height: auto;
`;

const title = css`
  color: rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

const input_div = css`
  padding: 10px;
  display: flex;

  border: 1px solid black;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0.5px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const input = css`
  border-width: 0px;
  width: 80%;
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
  font-family: 'GmarketSansMedium';
  border-radius: 10px;
`;

const input_btn = css`
  border-width: 0px;
  background-color: white;
  font-family: 'GmarketSansMedium';
  border-radius: 5px;
  color: white;
  font-size: 15px;
  height: 30px;
  width: 20%;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const item_div = css`
  border-radius: 10px;
  border: 1px solid black;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  margin-top: 5%;
  margin: 20px 0;
`;

const comments_div = css`
  margin-top: 30px;
`;

const item_name_text = css`
  font-size: 14px;
  color: gray;
  margin-block-end: 0.3em;
  margin-block-start: 0em;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const item_text = css`
  font-size: 14px;
  margin-block-end: 0em;
  margin-block-start: 0em;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const item_like_div = css`
  margin-top: 0.3em;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const like_span = css`
  margin-left: 0.4em;
`;

export default Comment;
