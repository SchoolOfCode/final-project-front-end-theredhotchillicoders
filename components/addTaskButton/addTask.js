import { useState } from 'react'
import css from './addTaskButton.module.css'
import { Button, Modal, Typography, Box } from '@mui/material/'
import Link from 'next/link'
import { useTheme } from '@mui/styles'
// const style = {
// 	position: 'absolute',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 400,
// 	bgcolor: 'background.paper',
// 	border: '2px solid #000',
// 	boxShadow: 24,
// 	p: 4
// };

export default function AddTask() {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <div className={css.addTaskButton}>
                <button className={css.taskButton} onClick={handleOpen}>
                    + Add Task
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div
                    className={css.style}
                    style={{
                        backgroundColor: theme.palette.text.primary,
                        border: `2px solid ${theme.palette.text.secondary}`,
                    }}
                >
                    <h3 style={{ color: theme.palette.text.secondary }}>
                        What do you want to do today?
                    </h3>
                    <Link href="/fitness">
                        <a className={css.activityButton} id="fitness">
                            Fitness
                        </a>
                    </Link>
                    <Link href="/recipes">
                        <a className={css.activityButton} id="recipe">
                            Recipes
                        </a>
                    </Link>
                    <Link href="/goals">
                        <a className={css.activityButton} id="myGoals">
                            Goals
                        </a>
                    </Link>
                    <Link href="/wellbeing">
                        <a className={css.activityButton} id="Wellbeing">
                            Wellbeing
                        </a>
                    </Link>
                    <button
                        onClick={handleClose}
                        className={css.backButton}
                        style={{ color: theme.palette.text.secondary }}
                    >
                        Back
                    </button>
                </div>
            </Modal>
        </div>
    )
}
