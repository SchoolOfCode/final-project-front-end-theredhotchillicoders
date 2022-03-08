import styles from './NavTop.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/styles'
//Colour definitions (ideally should be stored in themes and imported with useTheme)

// activeMode === 'light' ? (
//     <LightModeIcon style={{ fill: 'red', height:'50em'}} />
// ) : (
//     <ModeNightIcon sx={{ color: 'red', fill: 'red', height:'50em' }} />
// )
const cream = '#fdf7ec'
const darkBlue = '#0a2342'

function NavTop() {
    const theme = useTheme()
    const [colours, setColours] = useState({
        navClassName: styles.navLight,
        background: cream,
        text: darkBlue,
        activeClassName: styles.activeLight,
    })
    useEffect(() => {
        function getStyles() {
            if (theme.palette.type === 'light') {
                setColours({
                    navClassName: styles.navLight,
                    background: cream,
                    text: darkBlue,
                    activeClassName: styles.activeLight,
                })
            } else {
                if (theme.palette.type === 'dark') {
                    setColours({
                        navClassName: styles.navDark,
                        background: darkBlue,
                        text: cream,
                        activeClassName: styles.activeDark,
                    })
                }
            }
        }
        getStyles()
    }, [theme.palette.type])
    const router = useRouter()
    return (
        <div className={styles.navWrapper}>
        <nav className={colours.navClassName}>
            <h1>New Nav</h1>
        </nav>
        </div>
    )
}

export default NavTop