import { React, useState } from 'react'
import {
    CardContent,
    Typography,
    Button,
    Card,
    Modal,
    Box,
    TextField,
    CardActionArea,
} from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'

function AddYourOwn(info, setInfo) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    function CreateYourOwn({ goals, setInfo, Info }) {
        const router = useRouter()

        async function postYOurOwn(goals) {
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
        }
    }

    return (
        <Card
            data-testid="ActivityButtonCard"
            id="myGoals"
            sx={{
                maxWidth: 250,
                boxShadow: 5,
                borderRadius: '30px',
                p: 3,
            }}
        >
            {' '}
            <CardActionArea>
                <Image
                    onClick={handleOpen}
                    src="/Add.svg"
                    alt="add"
                    width="64"
                    height="64"
                />

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TextField
                            id="outlined-multiline-static"
                            label="title"
                            rows={4}
                            defaultValue="title..."
                            width="100%"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue="Set new goal..."
                            width="100%"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Duration"
                            rows={4}
                            defaultValue="How often?"
                            width="100%"
                        />
                        <button>Send</button>
                    </Box>
                </Modal>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="#fff"
                        textAlign="center"
                    >
                        Personal Goal
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default AddYourOwn
