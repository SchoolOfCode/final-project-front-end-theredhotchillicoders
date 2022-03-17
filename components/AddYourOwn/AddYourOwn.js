import { React, useState } from 'react'
import {
    Grid,
    CardContent,
    Typography,
    Button,
    Card,
    Modal,
    Box,
    CardActionArea,
    CardMedia,
} from '@mui/material'
import Link from 'next/link'
import { useTheme } from '@mui/styles'

//add your own custom task modal popup

function AddYourOwn({ info, setInfo, id, text }) {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //set title description and duration for the task

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '6px solid #fff',
        boxShadow: 24,
        p: 4,
        borderRadius: '25px',
        display: 'flex',
        flexDirection: 'column',
    }

    //sending the changed information to the database

    function sendData() {
        const objectToSend = {
            ...info,
            title: title,
            category: id,
            description: description,
            duration: duration,
        }

        console.log('object to send', objectToSend)
        setInfo({ ...info, ...objectToSend })

        sendPostRequest(objectToSend)

        // the set data will be post to the database
    }

    //taking in object with title category description duration and sending a post request to submit to the heroku database

    async function sendPostRequest(objectToSend) {
        //auth token is the token provided by firebase
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
                body: JSON.stringify(objectToSend), // body data type must match "Content-Type" header
            }
        )
    }

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
                    id={id}
                    style={{
                        maxWidth: '100%',
                        height: '200px',
                        width: '600px',
                        boxShadow: 5,
                        borderRadius: '10px',
                        margin: 'auto',
                    }}
                    onClick={handleOpen}
                >
                    <CardMedia
                        component="img"
                        height="80%"
                        width="30%"
                        image="/Add.svg"
                        alt="Add a custom exercise"
                        sx={{ p: 2 }}
                        style={{ overflow: 'visible', objectFit: 'contain' }}
                    />{' '}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box
                            sx={modalStyle}
                            style={{
                                backgroundColor: theme.palette.text.primary,
                                border: `2px solid ${theme.palette.text.secondary}`,
                            }}
                        >
                            <p style={{ color: theme.palette.text.secondary }}>
                                Title:
                            </p>
                            <input
                                id="outlined-multiline-static"
                                label="Title"
                                placeholder="Title..."
                                width="100%"
                                onChange={(e) => setTitle(e.target.value)}
                                style={{
                                    padding: '1rem',
                                    marginBottom: '.2rem',
                                }}
                                aria-label="Title"
                                type="email"
                                required
                            />
                            <p style={{ color: theme.palette.text.secondary }}>
                                Description:
                            </p>
                            <textarea
                                id="outlined-multiline-static"
                                label="Description"
                                placeholder="Description..."
                                width="100%"
                                rows="4"
                                style={{
                                    padding: '1rem',
                                    marginBottom: '.2rem',
                                }}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <p style={{ color: theme.palette.text.secondary }}>
                                Duration:
                            </p>
                            <input
                                id="outlined-multiline-static"
                                label="Duration"
                                placeholder="Duration..."
                                rows="4"
                                style={{
                                    padding: '1rem',
                                    marginBottom: '.2rem',
                                }}
                                width="100%"
                                onChange={(e) => setDuration(e.target.value)}
                            />
                            <Link a href="/">
                                <a>
                                    <Button
                                        className="PopupSendButton"
                                        variant="outlined"
                                        onClick={sendData}
                                        style={{
                                            color: theme.palette.text.primary,
                                            backgroundColor:
                                                theme.palette.text.secondary,
                                        }}
                                    >
                                        Send
                                    </Button>
                                </a>
                            </Link>
                        </Box>
                    </Modal>
                    <CardContent
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: theme.palette.text.primary,
                            width: '100%',
                            height: '30%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            paddingTop: '0.2em',
                            padding: '0',
                        }}
                    >
                        <Typography
                            className="activityCard"
                            gutterBottom
                            variant="h5"
                            component="div"
                            color={theme.palette.text.secondary}
                            textAlign="center"
                        >
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default AddYourOwn
