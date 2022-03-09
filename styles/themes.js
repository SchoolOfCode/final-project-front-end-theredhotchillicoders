import { amber, deepOrange, blue } from '@mui/material/colors'
import { createTheme } from '@mui/material'

//Define colours
const darkBlue = '#0a2342'
const cream = '#fdf7ec'

export const lightMode = createTheme({
    typography: {
        h5: {
            fontSize: '1.5rem',
            '@media (max-width:425px)': {
                fontSize: '1.2rem',
                paddingTop: '0.3em',
            },
            '@media (max-width:410px)': {
                fontSize: '1rem',
                paddingTop: '0.3em',
            },
        },
    },
    palette: {
        type: 'light',
        primary: blue,
        divider: cream,
        background: {
            default: cream,
            paper: darkBlue,
        },
        text: {
            primary: darkBlue,
            secondary: cream,
        },
    },
    light: {
        background: cream,
        text: darkBlue,
    },
    type: 'light', //theme.type property returns whether light or dark is currently applied
    components: {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    backgroundColor: darkBlue,
                    color: cream,
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fill: cream,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: cream,
                },
                input: {
                    '::placeholder': {
                        color: cream,
                        opacity: 0.9,
                    },
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: cream,
                },
            },
        },
    },
})

export const darkMode = createTheme({
    // palette values for dark mode
    palette: {
        type: 'dark',
        primary: blue,
        divider: darkBlue,
        background: {
            default: darkBlue,
            paper: cream,
        },
        text: {
            primary: cream,
            secondary: darkBlue,
        },
    },
    type: 'dark', //theme.type property returns whether light or dark is currently applied
    components: {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    backgroundColor: cream,
                    color: darkBlue,
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fill: darkBlue,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: darkBlue,
                },
                input: {
                    '::placeholder': {
                        color: darkBlue,
                        opacity: 0.9,
                    },
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: darkBlue,
                },
            },
        },
    },
})

//To use colours from modes use the following syntax:
//theme.darkMode.palette.primary
