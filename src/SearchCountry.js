const SearchCountry = (props) => {
  return (
    <div>
      {props.text}
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default SearchCountry;
