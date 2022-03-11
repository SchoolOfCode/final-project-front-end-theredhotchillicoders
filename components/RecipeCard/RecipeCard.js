import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { useRouter } from 'next/router'
import css from './recipeCard.module.css'
import { useTheme } from '@mui/material'

export default function RecipeCard({ recipe, Info, setInfo }) {
    const theme = useTheme()
    const router = useRouter()
    async function getRecipe(recipe) {
        const timer = setTimeout(() => {
            router.push('/')
            clearTimeout(timer)
        }, 1000)
        const objectToSend = {
            ...Info,
            title: recipe.label,
            category: 'recipe',
            description: recipe.url,
            duration: recipe.totalTime + ' mins',
        }
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
            data-testid="recipeCard"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '3rem',
                overflow: 'hidden',
                textAlign: 'center',
                height: '430px',
                width: '600px',
                background: '#0f7173',
            }}
        >
            <a href={recipe.url} target="_blank" rel="noreferrer">
                <CardMedia
                    component="img"
                    height="300px"
                    width="300px"
                    image={recipe.images.REGULAR.url}
                    alt={recipe.label}
                />
            </a>

            <CardContent>
                <Typography
                    gutterBottom
                    noWrap
                    variant="h6"
                    component="div"
                    sx={{
                        justifyContent: 'center',
                        color: '#fdf7ec',
                    }}
                    data-testid="recipeTitle"
                >
                    {recipe.label}
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: '#fdf7ec',
                    }}
                >
                    <Typography
                        variant="body2"
                        data-testid="recipeDetails"
                        sx={{
                            fontSize: '0.9em',
                            verticalAlign: 'middle',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#fdf7ec',
                        }}
                    >
                        {recipe.yield ? (
                            <RestaurantIcon
                                sx={{
                                    height: '0.6em',
                                    verticalAlign: 'text-bottom',
                                    display: 'inline-block',
                                    marginTop: '0em',
                                    fill: '#fdf7ec',
                                }}
                            ></RestaurantIcon>
                        ) : null}{' '}
                        {recipe.yield ? `${recipe.yield}` : null}
                        {recipe.totalTime ? (
                            <AccessTimeFilledIcon
                                sx={{
                                    height: '0.6em',
                                    verticalAlign: 'text-bottom',
                                    display: 'inline-block',
                                    marginTop: '0em',
                                    fill: '#fdf7ec',
                                }}
                            ></AccessTimeFilledIcon>
                        ) : null}{' '}
                        {recipe.totalTime ? `${recipe.totalTime} mins` : null}
                        {recipe.calories ? (
                            <LocalFireDepartmentIcon
                                sx={{
                                    height: '0.6em',
                                    verticalAlign: 'text-bottom',
                                    display: 'inline-block',
                                    marginTop: '0em',
                                    fill: '#fdf7ec',
                                }}
                            ></LocalFireDepartmentIcon>
                        ) : null}{' '}
                        {recipe.calories
                            ? `${Math.round(recipe.calories)} kcal`
                            : null}
                    </Typography>
                </div>
                <button
                    className={css.addButton}
                    onClick={() => getRecipe(recipe)}
                >
                    Add Me
                </button>
            </CardContent>

            {/* <CardActions>
                <Button size="small">Favourite</Button>
            </CardActions> */}
        </Card>
    )
}
