import React from 'react';
import { IMapCell } from '../../../utils/map';
import BoardCell from '../../atoms/BoardCell';
import BoardAxis from '../BoardAxis';

export type Props = {
  onCellClick: (cell: IMapCell) => void;
  rows: number;
  columns: number;
  map: IMapCell[][];
};

const BoardGrid: React.FC<Props> = ({ rows, columns, map, onCellClick }) => {
  const styles: Record<string, React.CSSProperties> = {
    gridStyles: {
      display: 'grid',
      gridTemplateAreas: `
      "....... header  header"
      "sidebar content content"
      `,
    },
    headerStyles: {
      gridArea: 'header',
    },
    sidebarStyles: {
      gridArea: 'sidebar',
    },
    contentStyles: {
      gridArea: 'content',
      display: 'flex',
      border: '1px solid blue',
    },
  };

  return (
    <>
      <div style={styles.gridStyles}>
        <div style={styles.headerStyles}>
          <BoardAxis length={rows} direction="row" label="letter"></BoardAxis>
        </div>
        <div style={styles.sidebarStyles}>
          <BoardAxis
            length={columns}
            direction="column"
            label="number"
          ></BoardAxis>
        </div>
        <div style={styles.contentStyles}>
          {map.map((column, idx1) => (
            <div className={`column-${idx1}`} key={idx1}>
              {column.map((cell, idx2) => (
                <div
                  className={`cell-${idx1}-${idx2}`}
                  key={idx2}
                  onClick={() => onCellClick(cell)}
                >
                  <BoardCell cell={cell}></BoardCell>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardGrid;
