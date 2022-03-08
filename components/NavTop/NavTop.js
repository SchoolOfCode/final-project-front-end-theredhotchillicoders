import styles from './NavTop.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
//Colour definitions (ideally should be stored in themes and imported with useTheme)

const cream = '#fdf7ec'
const darkBlue = '#0a2342'

function NavTop({ toggleColorMode }) {
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
                <button onClick={toggleColorMode} className={styles.modeButton}>
                    {theme.palette.type === 'light' ? (
                        <LightModeIcon
                            style={{ fill: '##fdf7ec', height: '2em' }}
                        />
                    ) : (
                        <ModeNightIcon
                            sx={{
                                color: '#0a2342',
                                fill: '#0a2342',
                                height: '2em',
                            }}
                        />
                    )}
                </button>
            </nav>
        </div>
    )
}

export default NavTop
