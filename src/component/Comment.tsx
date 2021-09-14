/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function Comment() {
  return (
    <div css={container}>
      <p>COMMENT</p>
      <div css={input_div}>
        <input type="text" css={input} />
        <button css={input_btn}>입력</button>
      </div>
    </div>
  );
}

const container = css`
  width: 100%;
  height: 100%;
`;

const input_div = css`
  border: 3px dashed rgba(245, 228, 217, 0.8);
  border-radius: 5px;
  padding: 10px;
  display: flex;
`;

const input = css`
  border-width: 0px;
  width: 80%;
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
`;

const input_btn = css`
  border-width: 0px;
  background-color: rgba(245, 228, 217, 0.8);
  font-family: 'GmarketSansMedium';
  //   padding: 5px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  height: 30px;
`;

export default Comment;
