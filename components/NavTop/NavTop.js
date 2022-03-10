import styles from './NavTop.module.css';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { pageWrapper } from '../../pages/_app';
import AccountMenu from '../AccountMenu/AccountMenu';
import lightModeLogo from '../../public/navyLogo.png';
import darkModeLogo from '../../public/creamLogo.png';
import Image from 'next/image';
import Link from 'next/link';
//Colour definitions (ideally should be stored in themes and imported with useTheme)

const cream = '#fdf7ec';
const darkBlue = '#0a2342';

function NavTop({ toggleColorMode, handleLogout }) {
	let { pageState, setPageState } = useContext(pageWrapper);
	const theme = useTheme();
	const [ colours, setColours ] = useState({
		navClassName: styles.navLight,
		background: cream,
		text: darkBlue,
		activeClassName: styles.activeLight
	});
	useEffect(
		() => {
			function getStyles() {
				if (theme.palette.type === 'light') {
					setColours({
						navClassName: styles.navLight,
						background: cream,
						text: darkBlue,
						activeClassName: styles.activeLight
					});
				} else {
					if (theme.palette.type === 'dark') {
						setColours({
							navClassName: styles.navDark,
							background: darkBlue,
							text: cream,
							activeClassName: styles.activeDark
						});
					}
				}
			}
			getStyles();
		},
		[ theme.palette.type ]
	);
	const router = useRouter();
	return (
		<nav aria-label="top-nav-bar" className={styles.navWrapper}>
			<div className={colours.navClassName}>
				<div className={styles.iconContainer}>
					<AccountMenu
						handleLogout={handleLogout}
						handleModalOpen={() =>
							setPageState({
								...pageState,
								modalOpen: !pageState.modalOpen
							})}
					/>
				</div>

				<Link href="/">
					<a aria-label="home">
						<Image
							src={theme.palette.type === 'light' ? lightModeLogo : darkModeLogo}
							alt="Life lifter logo"
							height="60"
							width="200"
						/>
					</a>
				</Link>
				<button aria-label="dark/light mode toggle" onClick={toggleColorMode} className={styles.modeButton}>
					{theme.palette.type === 'light' ? (
						<LightModeIcon style={{ fill: '#fdf7ec', height: '2em' }} />
					) : (
						<ModeNightIcon
							sx={{
								color: '#0a2342',
								fill: '#0a2342',
								height: '2em'
							}}
						/>
					)}
				</button>
			</div>
		</nav>
	);
}

export default NavTop;
