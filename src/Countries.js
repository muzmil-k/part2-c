const Countries = ({ data }) => {

    return (
        data.map((country) => (
            <p key={country.name}>{country.name} <button >show</button></p>
        ))
    )

}
export default Countries;