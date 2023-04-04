import { Box, Typography, styled } from "@mui/material"

const Component = styled(Box)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 20px;
    & > p {
        color: #F5C518;
        font-weight: 600;
        font-size: 18px;
        margin-top: 10px;
    }
`
const Poster = styled('img')({
    width : 88
})

const Wrapper = styled(Box)`
color: #FFFFFF;
display: flex;
& > p {
    margin-left: 10px;
}
`
const Upnext = ( {movies} ) => {
    return(
        <Component>
            <Typography>Up Next</Typography>
            {
                movies.splice(0, 3).map((movie) => (
                        <Wrapper>
                            <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                            <Typography>{movie.original_title}</Typography>
                        </Wrapper>
                ))
            }
        </Component>
    )
}
export default Upnext