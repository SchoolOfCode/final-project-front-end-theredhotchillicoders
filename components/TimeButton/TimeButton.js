import React from 'react'
import { useRouter } from 'next/router'
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material'

function TimeButton({ category, time, setInfo, Info }) {
    const router = useRouter()

    async function getTime(time) {
        const timer = setTimeout(() => {
            router.push('/')
            clearTimeout(timer)
        }, 1000)
        const objectToSend = { ...Info, duration: time }
        setInfo({ ...Info, duration: time })
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
        <Grid item xs={12} sm={6} md={3} p={1} align="center">
            <Card
                data-testid="TimeButtonCard"
                id={category}
                sx={{ maxWidth: 345, borderRadius: '30px' }}
                onClick={(e) => getTime(time)}
            >
                <CardActionArea>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            style={{ marginBottom: 0 }}
                            component="div"
                            color="#fdf7ec"
                            align="center"
                            time={time}
                        >
                            {time}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default TimeButton

//we want to add a calender on this page
// select date and add this to our object of setInfo
// then send this to the data base
// we need to add date columv to the database
