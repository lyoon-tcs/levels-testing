import { useState } from 'react';
import Child1 from './Child1';

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

const App = () => {
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
      <Child1
        levels={levels}
        levelSliderValues={levelSliderValues}
        setLevelSliderValues={setLevelSliderValues}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
