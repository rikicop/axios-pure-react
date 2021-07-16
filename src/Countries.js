import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios
                .get("https://restcountries.eu/rest/v2/all")
                .then((res) => {
                    setCountries(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setError(err)
                    setLoading(false)
                });
        }, 1000);
    }, []);

    return (
        <Fragment>
            <h1>Lista de Paises</h1>

            {loading ? <p> Loading... </p> : (
                <>
                    {countries.map((country) => (
                        <div key={country.name}>
                            {country.name} - {country.capital}
                        </div>
                    ))}
                </>
            )}

            {error ? <p style={{ color: 'red' }}>Error de conexión</p> : null}

        </Fragment>
    )
}

export default Countries



