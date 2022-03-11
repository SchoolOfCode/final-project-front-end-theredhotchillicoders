import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Typography, Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import RecipeCard from '../components/RecipeCard/RecipeCard.js'
import { useTheme } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import Calendar from '../components/Calendar/Calendar'
import { useRouter } from 'next/router'
import { dummyRecipes } from '../DummyData/DummyRecipes.js'
import Head from 'next/head'

const date = new Date()

async function fetchData(searchTerm) {
    let query = {
        recipes: searchTerm,
    }
    let authToken = sessionStorage.getItem('Auth Token')
    const response = await fetch(
        `https://socfinalproject.herokuapp.com/recipes/search`,
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
            body: JSON.stringify(query), // body data type must match "Content-Type" header
        }
    )
    const data = await response.json()
    console.log(data.payload)
    return data.payload
}

const RecipePage = ({ user }) => {
    const theme = useTheme()
    const router = useRouter()
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [recipeInfo, setRecipeInfo] = useState({
        date: date,
        title: '',
        category: '',
        description: '',
        userid: user.uid,
    })

    function handleChange(value) {
        setSearchInput(value)
    }

    async function fetchResults(event) {
        event.preventDefault()
        const results = await fetchData(searchInput)
        setSearchResults([...results])
    }

    return (
        <div>
            <Head>
                <title>Life Lifter - Recipes</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div
                className="header recipe-header"
                title="Recipes"
                aria-label="Recipe banner"
            />
            <div className="searchContainer">
                <div className="calendarContainer">
                    <Calendar setInfo={setRecipeInfo} Info={recipeInfo} />
                </div>
                <form onSubmit={(e) => fetchResults(e)}>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            sx={{
                                backgroundColor: theme.palette.text.primary,
                            }}
                            value={searchInput}
                            onChange={(e) => handleChange(e.target.value)}
                            fullWidth
                            placeholder="Search for a recipe"
                            id="fullWidth"
                        />
                        <button
                            aria-label="search button"
                            onClick={(e) => fetchResults(e)}
                            style={{
                                textDecoration: 'none',
                                background: 'none',
                                border: `1px solid ${theme.palette.text.primary}`,
                            }}
                        >
                            <SearchIcon
                                sx={{
                                    fill: theme.palette.text.primary,
                                }}
                            />
                        </button>
                    </div>
                </form>
                {searchResults.length === 0 ? (
                    <>
                        <h1>Featured recipes: </h1>{' '}
                        <Grid container>
                            {dummyRecipes.map((recipe, index) => (
                                <Grid
                                    key={index}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    p={1}
                                >
                                    <RecipeCard
                                        recipe={recipe}
                                        setInfo={setRecipeInfo}
                                        Info={recipeInfo}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : null}

                {/* <div className="resultsContainer"> */}
                {searchResults.length > 0 ? <h1>Results: </h1> : null}
                <Grid container>
                    {searchResults.length > 0
                        ? searchResults.map((recipe, index) => (
                              <Grid
                                  key={index}
                                  item
                                  xs={12}
                                  sm={6}
                                  md={4}
                                  p={1}
                              >
                                  <RecipeCard
                                      recipe={recipe}
                                      setInfo={setRecipeInfo}
                                      Info={recipeInfo}
                                  />
                              </Grid>
                          ))
                        : null}
                </Grid>
                {/* </div> */}
                <div className="backBtn">
                    <Button
                        variant="outlined"
                        onClick={() => {
                            router.push('/')
                        }}
                        style={{
                            color: theme.palette.text.secondary,
                            backgroundColor: theme.palette.text.primary,
                            marginTop: '5rem',
                        }}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RecipePage

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
