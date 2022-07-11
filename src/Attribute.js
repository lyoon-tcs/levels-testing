import { useState } from 'react';
import LevelStage from './LevelStage';

const levels = [
  {
    level: 'Red',
  },
  {
    level: 'Green',
  },
  {
    level: 'Blue',
  },
];

const Attribute = () => {
  // state
  const [levelSliderValues, setLevelSliderValues] = useState(
    levels.reduce((levelSliderMap, level) => {
      const levelName = level.level;

      levelSliderMap[levelName] = 5;
      return levelSliderMap;
    }, {})
  );
  console.log(levelSliderValues);

  // retrieve initial slider values, update the targeted level's value
  function handleInputChange(event, levelName) {
    const levelSliderValue = Number(event.target.value);

    // retrieve initial slider values, update the targeted level's value
    setLevelSliderValues({
      ...levelSliderValues,
      [levelName]: levelSliderValue,
    });
  }

  return (
    <div>
      <LevelStage
        levels={levels}
        levelSliderValues={levelSliderValues}
        setLevelSliderValues={setLevelSliderValues}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default Attribute;
