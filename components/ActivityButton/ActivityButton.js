import React from 'react'

import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

function ActivityButton({
    title,
    description,
    category,
    setInfo,
    image,
    Info,
}) {
    function getExercise() {
        setInfo({
            ...Info,
            title: title,
            category: category,
            description: description,
        })
    }
    //
    return (
        <Grid
            item
            xs={6}
            sm={4}
            md={3}
            p={1}
            align="center"
            style={{ justifyContent: 'center' }}
        >
            <CardActionArea sx={{ width: '80%' }}>
                <Card
                    data-testid="ActivityButtonCard"
                    id={category}
                    sx={{
                        maxWidth: 250,
                        boxShadow: 5,
                        borderRadius: '30px',
                        p: 3,
                        margin: 'auto',
                        maxHeight: 280,
                        minHeight: 280,
                    }}
                    onClick={getExercise}
                >
                    <CardMedia
                        component="img"
                        height="80%"
                        image={image}
                        alt={title}
                    />
                    <CardContent
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="#fff"
                            textAlign="center"
                        >
                            {title}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
export default ActivityButton

// Description text removed
{
    /* <Typography variant="body2" color="#fff">
{description}
</Typography> */
}
