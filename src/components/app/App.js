/*..........Import Styles......*/
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
/*..........Import React......*/
import { BrowserRouter, Route } from 'react-router-dom';

/*..........Import components */
import Header from "../header/Header";
import InfoPage from "../welcome-page/Welcome";
import SearchPage from "../searchPage/SearchPage";
import BreweryInfo from "../breweryInfo/BreweryInfo";

function App() {
	return (
		<BrowserRouter>
			<div className="main">
				<Route
					path='/'
					render={(props) => {
						return (<Header path={props.location.pathname} />)
					}}
				>
				</Route>
				<div className="container">
					<Route
						exact
						path='/'
						component={InfoPage}
					></Route>
					<Route
						exact
						path='/search'
						component={SearchPage}>
					</Route>
					<Route
						path={'/breweryInfo/:id'}
						render={(match) => {
							return (<BreweryInfo breweryId={match.match.params.id} />)
						}}
					>
					</Route>
				</div>
			</div>
		</BrowserRouter >
	);
}

export default App;
