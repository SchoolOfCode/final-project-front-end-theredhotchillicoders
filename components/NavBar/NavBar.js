import Link from 'next/link'
import HomeIcon from './Icons/HomeIcon'
import styles from './NavBar.module.css'
import FitnessIcon from './Icons/FitnessIcon'
import RecipesIcon from './Icons/RecipesIcon'
import GoalIcon from './Icons/GoalIcon'
import WellnessIcon from './Icons/WellnessIcon'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/styles'
//Colour definitions (ideally should be stored in themes and imported with useTheme)

const cream = '#fdf7ec'
const darkBlue = '#0a2342'

function NavBar() {
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
        <nav className={colours.navClassName}>
            <Link href="/">
                <a
                    style={{
                        backgroundColor:
                            router.pathname === '/'
                                ? colours.background
                                : colours.text, //Conditional CSS rendering to change icon colours based on darkmode
                    }}
                >
                    <HomeIcon
                        width="2em"
                        height="2em"
                        fill={`${
                            router.pathname === '/'
                                ? colours.text
                                : colours.background
                        }`} //Conditional CSS rendering to change icon colours based on darkmode
                    />
                </a>
            </Link>
            <Link href="/fitness">
                <a
                    style={{
                        backgroundColor:
                            router.pathname === '/fitness'
                                ? colours.background
                                : colours.text, //Conditional CSS rendering to change icon colours based on darkmode
                    }}
                >
                    {' '}
                    <FitnessIcon
                        width="2.2em"
                        height="2.2em"
                        fill={`${
                            router.pathname === '/fitness'
                                ? colours.text
                                : colours.background
                        }`}
                    />
                </a>
            </Link>
            <Link href="/recipes">
                <a
                    style={{
                        backgroundColor:
                            router.pathname === '/recipes'
                                ? colours.background
                                : colours.text, //Conditional CSS rendering to change icon colours based on darkmode
                    }}
                >
                    <RecipesIcon
                        width="2em"
                        height="2em"
                        fill={`${
                            router.pathname === '/recipes'
                                ? colours.text
                                : colours.background
                        }`} //Conditional CSS rendering to change icon colours based on darkmode
                    />
                </a>
            </Link>
            <Link href="/goals">
                <a
                    style={{
                        backgroundColor:
                            router.pathname === '/goals'
                                ? colours.background
                                : colours.text, //Conditional CSS rendering to change icon colours based on darkmode
                    }}
                >
                    {' '}
                    <GoalIcon
                        width="2.2em"
                        height="2.2em"
                        fill={`${
                            router.pathname === '/goals'
                                ? colours.text
                                : colours.background
                        }`} //Conditional CSS rendering to change icon colours based on darkmode
                    />
                </a>
            </Link>
            <Link href="/wellbeing">
                <a
                    style={{
                        backgroundColor:
                            router.pathname === '/wellbeing'
                                ? colours.background
                                : colours.text, //Conditional CSS rendering to change icon colours based on darkmode
                    }}
                >
                    {' '}
                    <WellnessIcon
                        width="2.2em"
                        height="2.2em"
                        fill={`${
                            router.pathname === '/wellbeing'
                                ? colours.text
                                : colours.background
                        }`} //Conditional CSS rendering to change icon colours based on darkmode
                    />
                </a>
            </Link>
        </nav>
    )
}

export default NavBar
