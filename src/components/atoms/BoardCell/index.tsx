import React from 'react';
import { IMapCell } from '../../../utils/map';
import { StyledBoardCell } from './styledBoardCell';

export type Props = {
  cell?: IMapCell;
};

const BoardCell: React.FC<Props> = ({ cell }) => {
  return (
    <>
      <StyledBoardCell>{cell?.isIsland ? '🏝' : '.'}</StyledBoardCell>
    </>
  );
};

export default BoardCell;
