import React from "react";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinner = props => {
  return (
    <div className="sweet-loading">
      <FadeLoader css={override} color={"red"} loading />
    </div>
  );
};

export default spinner;
