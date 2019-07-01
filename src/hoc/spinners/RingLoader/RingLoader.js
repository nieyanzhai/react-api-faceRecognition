import React from "react";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinner = props => {
  return (
    <div className="sweet-loading">
      <RingLoader
        css={override}
        sizeUnit={"px"}
        size={25}
        color={"red"}
        loading
      />
    </div>
  );
};

export default spinner;
