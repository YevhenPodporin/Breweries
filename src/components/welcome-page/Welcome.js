import breweries from '../imgs/breweries.jpg';
import './InfoPage.css';


export default function InfoPage() {
	return (
		<div className='container info-page mt-5'>
			<h1>Welcome to Breweries info!</h1>
			<p>This web-site is a React application that allows searching the
				information on breweries, cideries, brewpubs and bottle shops
			</p>
			<img src={breweries} alt="Breweries Image" />
		</div>
	)
}