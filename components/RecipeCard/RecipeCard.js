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
import { useRouter } from 'next/router'

export default function RecipeCard({ recipe , Info, setInfo}) {
    const router = useRouter()
    async function getRecipe(recipe) {
        const timer = setTimeout(() => {
            router.push('/')
            clearTimeout(timer)
        }, 1000)
        const objectToSend = { ...Info, title:recipe.label, category:"recipe", description:recipe.url, duration:recipe.totalTime + " mins" }
        setInfo({ ...Info, ...objectToSend })
        const data = await sendPostRequest(objectToSend)
    }

    async function sendPostRequest(Info) {
        console.log(Info)
        // Default options are marked with *
        let authToken = sessionStorage.getItem('Auth Token')
        const response = await fetch(
            `https://socfinalproject.herokuapp.com/activities`,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + authToken,
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(Info), // body data type must match "Content-Type" header
            }
        )
        console.log(response)
        // return response.json(); // parses JSON response into native JavaScript objects
    }
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
            

            <CardContent onClick={( )=> getRecipe(recipe)}>
                <Typography gutterBottom noWrap variant="h6" component="div" sx={{justifyContent:'center'}}>
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
