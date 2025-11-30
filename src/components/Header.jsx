import styles from '../css/Header.module.css';

// router
import { Link } from 'react-router-dom';

// components
import IconButton from './Actions/IconButton';

// icons
import { FaPlus, FaBars } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';

const publicUrl = process.env.PUBLIC_URL;

function Header() {
	const navItems = [
		['/modal/habitEditor', 'Create new habit', <FaPlus />],
		['/modal/diary', 'Main Diary', <MdLibraryBooks />],
		['/modal/menu', 'Menu', <FaBars />]
	].map(([path, title, icon]) => (
		<li key={path}>
			<Link to={publicUrl + path} state={{ modalTitle: title }}>
				<IconButton icon={icon} title={title} />
			</Link>
		</li>
	));

	return (
		<header className={styles.header}>
			<div className={styles.logoWrapper}>
				<span className={styles.logo} />
			</div>

			<nav>
				<ul className={styles.navList}>
					{navItems}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
