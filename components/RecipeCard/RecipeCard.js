import * as React from 'react'
import Grid from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { padding } from '@mui/system'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function RecipeCard({ recipe }) {
    return (
        <Card
            className="recipeCard"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '3rem',
                overflow: 'hidden',
                height: '430px',
                width: '600px',
            }}
        >
            <a href={recipe.url} target='_blank'>
            <CardMedia
                component="img"
                height="300px"
                width=""
                image={recipe.images.REGULAR.url}
                alt={recipe.label}
            />
            </a>
            

            <CardContent>
                <Typography gutterBottom noWrap variant="h6" component="div" >
                    {recipe.label}
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{fontSize:'0.9em', verticalAlign:'middle', display:'flex', justifyContent:'space-between'}}>
                    {recipe.yield ?(<RestaurantIcon sx={{height:"0.6em", verticalAlign:'text-bottom', display:'inline-block', marginTop:'0em'}}></RestaurantIcon>): null} {recipe.yield ? `${recipe.yield}`  : null} 
                    {recipe.totalTime ?(<AccessTimeFilledIcon sx={{height:"0.6em", verticalAlign:'text-bottom', display:'inline-block', marginTop:'0em'}}></AccessTimeFilledIcon>): null} {recipe.totalTime ? `${recipe.totalTime} mins`  : null} 
                    {recipe.calories ?(<LocalFireDepartmentIcon sx={{height:"0.6em", verticalAlign:'text-bottom', display:'inline-block', marginTop:'0em'}}></LocalFireDepartmentIcon>): null} {recipe.calories ? `${Math.round(recipe.calories)} kcal`  : null} 
       
                    </Typography>
                </div>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Favourite</Button>
            </CardActions> */}
        </Card>
    )
}
