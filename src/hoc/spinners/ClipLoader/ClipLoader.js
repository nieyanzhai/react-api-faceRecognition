import React from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinner = props => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} color={"red"} loading />
    </div>
  );
};

export default spinner;
