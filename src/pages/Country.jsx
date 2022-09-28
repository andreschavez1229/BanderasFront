import React, { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { code } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useGetData(
    `https://restcountries.com/v3.1/alpha/${code}`
  )

  useEffect(() => {
    data.status === 400 && navigate('/404')
  }, [data.status])

  return (
    <section className='container py-4'>
      <div className='row justify-content-center text-white'>
        <aside className='col-6'>
          {loading
            ? <p className='text-center text-white'>Cargando...</p>
            : (
              <article>
                <img className='img-fluid' src={data[0]?.flags?.svg} alt='bandera' />
                <h1 className='text-center'>{data[0]?.name?.common || data.message}</h1>
                <h2 className='text-center'>Capital: {data[0].capital}</h2>
                <h2 className='text-center'>Población total: {data[0].population}</h2>

              </article>
              )}
        </aside>
        {/* {data.status === 400 && <Navigate to='/404' />} */}
      </div>
    </section>
  )
}

export default Country
