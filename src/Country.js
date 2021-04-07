const Country = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>capital {data.capital}</p>
      <p>Population {data.population}</p>
      <h2>Spoken Languages</h2>
      <ul>
        {data.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={data.flag} alt={data.name + "flag"} height={150} />
      <h2>Weather in {data.capital}</h2>
      <p>[Remaining]</p>
    </div>
  );
};
export default Country;
