const Child2 = ({ name = 'Level name', value = 5, handleInputChange }) => {
  return (
    <div className="level" style={{ display: 'flex' }}>
      <div>{name}</div>
      <input
        style={{ margin: '0 0.6125rem' }}
        type="range"
        onChange={handleInputChange}
        name={name}
        value={value}
        min="0"
        max="10"
        step="0.1"
      />
      <div>{value}</div>
    </div>
  );
};

export default Child2;
