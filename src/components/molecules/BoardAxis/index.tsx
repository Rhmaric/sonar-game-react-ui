import React from 'react';
import { alphabet } from '../../../utils';
import { StyledBoardCell } from '../../atoms/BoardCell/styledBoardCell';

export type Props = {
  length: number;
  direction: 'row' | 'column';
  label: 'number' | 'letter';
};

const BoardAxis: React.FC<Props> = ({ length, direction, label }) => {
  const axisArray: number[] = Array.from(Array(length).keys());
  const axisLabel: (string | number)[] = axisArray.map(i =>
    label === 'letter' ? alphabet[i] : i + 1,
  );

  const axisStyle = {
    display: 'flex',
    flexDirection: direction,
  };

  return (
    <>
      <div className={`grid-axis ${direction} ${label}`} style={axisStyle}>
        {axisLabel.map(label => (
          <StyledBoardCell>{label}</StyledBoardCell>
        ))}
      </div>
    </>
  );
};

export default BoardAxis;
