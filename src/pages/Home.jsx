import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { categoryMovies } from '../services/Api'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { Box, styled } from '@mui/material'

import Banner from '../components/Banner'
import Upnext from '../components/Upnext'
import Slide from '../components/Slide'

const Wrapper = styled(Box)`
display: flex
`
const Component = styled(Box)`
padding: 20px 115px;`
const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      let result = await categoryMovies(NOWPLAYING_API_URL)
      console.log(result, "TR")
      setMovies(result);
    }
    getData();
  }, [])

  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <Upnext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
      </Component>
    </>
  )
}
export default Home
