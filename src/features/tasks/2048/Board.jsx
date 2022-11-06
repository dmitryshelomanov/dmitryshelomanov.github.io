import styled from "styled-components";
import { CELL_SIZE, BOARD_SIZE } from "./settings";

export const Board = styled.div`
  width: calc(${CELL_SIZE}px * ${BOARD_SIZE} + 5px * ${BOARD_SIZE} + 5px);
  height: calc(${CELL_SIZE}px * ${BOARD_SIZE} + 5px * ${BOARD_SIZE} + 5px);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
  background-color: #bbada0;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 16px;
  touch-action: none;
`;
