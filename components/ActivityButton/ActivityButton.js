import React from 'react'

import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
import { useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'



function ActivityButton({
    title,
    description,
    category,
    setInfo,
    image,
    Info,
}) 
       
{
    const theme = useTheme()
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
                    style={{
                        maxWidth: '100%',
                        height:'200px',
                        width:'600px',
                        boxShadow: 5,
                        borderRadius: '10px',
                        margin: 'auto',
                        // maxHeight: 280,
                        // minHeight: 280,
                    }}
                    onClick={getExercise}
                >
                    <CardMedia
                        component="img"
                        height="80%"
                        width="30%"
                        image={image}
                        alt={title}
                        sx={{p:2}}
                        style={{overflow:'visible', objectFit:'contain'}}
                    />
                    <CardContent
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            backgroundColor:theme.palette.text.primary,
                            width: '100%',
                            height: '30%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            paddingTop:'0.2em',
                            padding:'0',
                         }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color={theme.palette.text.secondary}
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
