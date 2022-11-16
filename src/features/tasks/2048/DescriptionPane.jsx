import styled, { css } from "styled-components";

export const DescriptionPane = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${(p) =>
    p.failed
      ? css`
          background: rgba(212, 85, 85, 0.5);
        `
      : css`
          background: rgba(212, 185, 85, 0.5);
        `}

  > .ant-typography {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
  }
`;
