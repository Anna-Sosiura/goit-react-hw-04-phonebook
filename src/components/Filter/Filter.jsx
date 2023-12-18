const Filter = ({ value, onChange }) => {
  return (
    <label
      style={{
        fontSize: 23,
        fontStyle: 'italic',
      }}
    >
      Find contacts by name
      <input
        style={{
          fontSize: 25,
        }}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
