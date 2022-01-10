import React from 'react';
import { useStoreActions, useStoreState } from '../../../store/hooks';
import { IMapCell } from '../../../utils/map';
import { CardinalDirection } from '../../../utils/trace';
import BoardGrid from '../../molecules/BoardGrid';

const SonarBoard = () => {
  const map = useStoreState(state => state.map);
  const initMap = useStoreActions(actions => actions.map.initMap);
  const addStep = useStoreActions(actions => actions.enemyTrace.addStep);
  const convertIntoIsland = useStoreActions(
    actions => actions.map.convertIntoIsland,
  );

  const handleCellClick = (cell: IMapCell) => {
    console.log(cell);
    convertIntoIsland(cell);
  };

  const styles: Record<string, React.CSSProperties> = {
    compassContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    compassNorthOrSouth: {
      display: 'flex',
      flexDirection: 'column',
    },
    buttonWestAndEst: {
      width: '100px',
      padding: '6px',
    },
    buttonNorthAndSouth: {
      height: '100px',
      margin: '5px',
      padding: '6px',
    },
    labelNorthAndSouth: {
      writingMode: 'vertical-rl',
    },
  };

  return (
    <>
      <button onClick={() => initMap()}>reset Map</button>
      <div style={styles.compassContainer}>
        <button
          onClick={() => addStep(CardinalDirection.West)}
          style={styles.buttonWestAndEst}
        >
          Go West
        </button>
        <div style={styles.compassNorthOrSouth}>
          <button
            onClick={() => addStep(CardinalDirection.North)}
            style={styles.buttonNorthAndSouth}
          >
            <span style={styles.labelNorthAndSouth}>Go North</span>
          </button>
          <button
            onClick={() => addStep(CardinalDirection.South)}
            style={styles.buttonNorthAndSouth}
          >
            <span style={styles.labelNorthAndSouth}>Go South</span>
          </button>
        </div>
        <button
          onClick={() => addStep(CardinalDirection.Est)}
          style={styles.buttonWestAndEst}
        >
          Go Est
        </button>
      </div>

      <BoardGrid
        rows={map.rows}
        columns={map.columns}
        map={map.map}
        onCellClick={handleCellClick}
      ></BoardGrid>
    </>
  );
};

export default SonarBoard;
