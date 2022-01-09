import React from 'react';
import { StyledBoardCell } from './styledBoardCell';

export type Props = {
  isIsland?: boolean;
};

const BoardCell: React.FC<Props> = ({ isIsland = false }) => {
  return (
    <>
      <StyledBoardCell>{isIsland ? '🏝' : '🔵'}</StyledBoardCell>
    </>
  );
};

export default BoardCell;
