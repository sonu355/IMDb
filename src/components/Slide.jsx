import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  styled, Box, Typography } from "@mui/material";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const StyledBanner = styled('img')`
    width: 100%;
    margin-top: 20px;
`
const Title= styled(Typography)`
color: #FFFFFF;`
const Slide = ({ movies}) => {
    return (
        <Carousel Carousel
                responsive = { responsive }
                showDots = { true}
                swipeable = { false}
                draggable = { false}
                keyBoardControl = { true}
                infinite = { true}
                autoPlay = { true}
                autoPlaySpeed = { 3000}
                slidesToSlide = { 1}
            >
            {
                movies.map((movie) => (
                    <Box>
                        <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                        <Title>{movie.original_title}</Title>
                    </Box>
                ))
            }
        </Carousel >
    )
}
export default Slide;