import Child2 from './Child2';

const Child1 = ({ levels, handleInputChange, levelSliderValues }) => {
  const renderLevels = () => {
    const levelsArray = levels.map((level) => {
      const levelName = level.level;

      return (
        <Child2
          key={level.level}
          name={level.level}
          value={levelSliderValues[levelName]}
          handleInputChange={(event) => {
            handleInputChange(event, levelName);
          }}
        />
      );
    });
    return levelsArray;
  };
  return (
    // following poc-design-framework structure
    <div>
      <div>{renderLevels()}</div>
    </div>
  );
};

export default Child1;
