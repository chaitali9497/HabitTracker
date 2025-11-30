import styles from '../../css/Menu.module.css';
import packageJson from '../../../package.json';

// components
import MenuItemList from './MenuItemList';
import MenuItem from './MenuItem';

// utils
//import clearLocalStorage from '../../utils/clearLocalStorage';

// icons
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiArchiveBox } from "react-icons/hi2";

const PUBLIC_URL = process.env.PUBLIC_URL;

function Menu() {
	return (
		<section className={styles.menu}>

			{/* App Section */}
			<MenuItemList title="App">
				<MenuItem
					icon={<HiArchiveBox />}
					iconColor="#7b68ee"
					title="Archive"
					desc="View or manage archived habits"
					to={`${PUBLIC_URL}/modal/archive`}
					state={{ modalTitle: 'Archive' }}
					arrow
				/>

				<MenuItem
					icon={<FaPaintBrush />}
					iconColor="#ffa420"
					title="Appearance"
					desc="Customize the app's look"
					to={`${PUBLIC_URL}/modal/appearance`}
					state={{ modalTitle: 'Appearance' }}
					arrow
				/>

				<MenuItem
					icon={<BsFillDatabaseFill />}
					iconColor="#77dd77"
					title="Export / Import Data"
					desc="Backup or restore your data"
					to={`${PUBLIC_URL}/modal/dataTransfer`}
					state={{ modalTitle: 'Export/Import Data' }}
					arrow
				/>
			</MenuItemList>

			{/* Other Section */}
			<MenuItemList title="Other">
				<MenuItem
					icon={<IoIosMail />}
					iconColor="#ffb841"
					title="Send Feedback"
					desc="Share your thoughts or report an issue"
					onClick={() => window.location.href = 'mailto:califitoga@gmail.com?subject=Feedback%20on%20Califitoga'}
					link
				/>
			</MenuItemList>

			{/* Footer */}
			<div className={`${styles.category} ${styles.footer}`}>
				<small>Version: {packageJson.version}</small>
			</div>

		</section>
	);
}

export default Menu;
