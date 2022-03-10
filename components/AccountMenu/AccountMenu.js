import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import EditIcon from '@mui/icons-material/Edit'
import Edit from '@mui/icons-material/Edit'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import { useState } from 'react'
import { Button } from '@mui/material/'
import Link from 'next/link'
import { Modal } from '@mui/material'
import { useTheme } from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person'
import { red } from '@mui/material/colors'
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

export default function AccountMenu({ handleLogout, handleModalOpen }) {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        ml: 1,
                        mt: 0.5,
                        alignItems: 'left',
                        borderStyle: 'solid',
                        borderColor: theme.palette.text.secondary,
                        borderWidth: '1px',
                    }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{ left: 0, alignSelf: 'center' }}
                >
                    <PersonIcon
                        sx={{
                            width: 32,
                            height: 32,
                            fill: theme.palette.text.secondary,
                        }}
                    ></PersonIcon>
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        color: theme.palette.text.secondary,
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 2.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 8,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <AutoGraphIcon sx={{ marginRight: '5px' }} /> My Progress
                </MenuItem>
                <MenuItem onClick={handleModalOpen}>
                    <Edit sx={{ marginRight: '5px' }} /> Set Name
                </MenuItem>
                <Divider style={{ marginTop: 2, marginBottom: 2 }} />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout
                            fontSize="small"
                            style={{ color: theme.palette.text.secondary }}
                        />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}
