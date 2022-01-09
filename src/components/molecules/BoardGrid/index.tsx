import React from 'react';
import BoardCell from '../../atoms/BoardCell';
import BoardAxis from '../BoardAxis';

export type Props = {
  onCellClick: (row: number, column: number) => void;
  rows: number;
  columns: number;
};

const BoardGrid: React.FC<Props> = ({ rows, columns, onCellClick }) => {
  const rowsArray: number[] = Array.from(Array(rows).keys());
  const columnsArray: number[] = Array.from(Array(columns).keys());

  const styles = {
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
          {rowsArray.map(row => (
            <div className={`row-${row}`}>
              {columnsArray.map(column => (
                <div
                  className={`cell-${row}-${column}`}
                  onClick={() => onCellClick(row, column)}
                >
                  <BoardCell isIsland={false}></BoardCell>
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
