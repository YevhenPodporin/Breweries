import { Link } from "react-router-dom";
import './Header.css'

export default function Header(path) {
	const pathToHomePage = "/";
	const pathToSearchPage = "/search";
	const classForActivePage = 'active-page';

	return (
		<>
			<header className="header shadow p-3 mb-5">
				<nav className=" header-nav">
					<div>
						<Link
							className=' title-item'
							to={pathToHomePage}>Breweries info</Link>
					</div>
					<div>
						<Link
							className={path.path === pathToHomePage ? classForActivePage : 'home-item'}
							to={pathToHomePage}>Home</Link>
					</div>
					<div>
						<Link
							className={path.path === pathToSearchPage ? classForActivePage : 'search-item'}
							to={pathToSearchPage}>Search</Link>
					</div>
				</nav>
			</header>
		</>
	)
}