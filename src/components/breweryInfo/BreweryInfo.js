import { Link } from "react-router-dom";
import DataServis from "../../servis/dataServis";
import { useEffect, useState } from 'react';
import './BreweryInfo.css';

const PARAGRAPRH_IMG = [
	{ alt: "🍺", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f37a.png" },
	{ alt: "🗺️", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f5fa.png" },
	{ alt: "🏠", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f3e0.png" },
	{ alt: "📞", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f4de.png" },
	{ alt: "🔗", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f517.png" },
];

export default function BreweryInfo(props) {
	const getDataOfBrewery = new DataServis;
	const [breweryData, setBreweryData] = useState({});
	const [breweryName, setBreweryName] = useState('');
	const [breweryId, setBreweryId] = useState(props.breweryId);

	useEffect(() => {
		getDataOfBrewery.getBreweryInfoById(breweryId)
			.then((data) => {
				setBreweryName(data.name);
				const filtratedData = [
					`${data.brewery_type}`,
					`${data.country}`,
					`${data.street}, ${data.city}, ${data.state}, ${data.postal_code}`,
					`${data.phone}`,
					<a href={data.website_url} target="_blank">
						{data.website_url}
					</a>
				];
				setBreweryData(filtratedData);
				setBreweryId(props.breweryId);
			})
	}, [props.breweryId])

	return (
		<div className="container mt-5">
			<h2>{breweryName}</h2>
			{
				PARAGRAPRH_IMG.map((img, i) => {
					return (
						<p key={i} className="brewery-p">
							<img src={img.src} alt={img.alt} />
							<span>{breweryData[i]}</span>
						</p>
					)
				})
			}
			<Link className="mt-3 btn btn-primary" to='/search'>Go Back</Link>
		</div>
	)
}