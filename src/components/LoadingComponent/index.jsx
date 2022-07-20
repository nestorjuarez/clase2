import React, { useEffect, useState } from 'react'

export const LoadingComponent = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },2500)
  })
  return (
    <h4>LoadingComponent: {loading ? 'cargando' : 'cargó'}</h4>
  )
}
