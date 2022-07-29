import './SearchPage.css'
import DataServis from '../../servis/dataServis';
import { useEffect, useState } from 'react';
import SearchResultTable from './SearchResulTable';
import Loading from '../loading/Loading';

export default function SearchPage(props) {
	const [breweriesData, setBreweriesData] = useState([]);
	const [isPressBtnSearch, setIsPressBtnSearch] = useState(false);
	const [loading, setLoading] = useState(false);
	const [clickToSort, setClickToSort] = useState(null);
	const [targetSort, setTargetSort] = useState(null);
	const getDataByValue = new DataServis();
	const sortByName = 'name';
	const sortByLocation = 'location';
	const sortById = '#';
	const classNameToSortUp = 'sort-by-field-up';
	const classNameToSortDown = 'sort-by-field-down';

	const getdata = function (e) {
		e.preventDefault();
		const searchValue = document.querySelector('form input.form-control').value;

		setLoading(true);
		setIsPressBtnSearch(true);

		getDataByValue.getBreweriesByValue(searchValue)
			.then((res) => {
				setBreweriesData(res);
				setLoading(false);
			})
	};

	const clearData = () => {
		const searchForm = document.querySelector('form.search-form');

		targetSort && targetSort.classList.remove(classNameToSortDown);
		targetSort && targetSort.classList.remove(classNameToSortUp);
		setBreweriesData([]);
		setIsPressBtnSearch(false);
		searchForm.reset();
	};

	const sortByField = function (field, dataToSort, clickToSort) {
		setBreweriesData(() => {
			return dataToSort.sort((a, b) =>
				clickToSort
					? (a[field] < b[field] ? 1 : -1)
					: (a[field] > b[field]) ? 1 : -1)
		})
	}

	const sortData = (e) => {
		if (e.target.classList.contains('none-click')) {
			return;
		}
		setClickToSort(!clickToSort);
		setTargetSort((prevTarget) => {
			if (prevTarget !== null
				&& e.target.innerHTML !== prevTarget.innerHTML) {
				prevTarget.classList.remove(classNameToSortDown);
				prevTarget.classList.remove(classNameToSortUp);
			}
			return e.target;
		});

		if (clickToSort) {
			e.target.classList.remove(classNameToSortDown);
			e.target.classList.add(classNameToSortUp);
		} else {
			e.target.classList.remove(classNameToSortUp);
			e.target.classList.add(classNameToSortDown);
		}
		switch (e.target.innerHTML.toLowerCase()) {
			case sortByName:
				sortByField(sortByName, breweriesData, clickToSort);
				break;
			case sortByLocation:
				sortByField('city', breweriesData, clickToSort);
				break;
			case sortById:
				sortByField('id', breweriesData, clickToSort);
				break;
			default: break;
		}
	}

	return (
		<div className="container flex-container mt-5">
			<div className="search-title">
				<h2>Search for Breweries</h2>
			</div>
			<form
				onSubmit={getdata}
				className="search-form needs-validation">
				<input
					type="text"
					className="form-control me-2"
					required ></input>
				<button
					className="btn btn-dark me-2"
					type="submit">Search</button>
				<button
					onClick={clearData}
					className="btn btn-warning"
					type="button">Clear</button>
			</form>

			{isPressBtnSearch && (
				breweriesData.length > 0
					? <div >Breweries found: {breweriesData.length}</div>
					: <div>No breweries found</div>
			)}

			<div className='search-results border border-1 shadow-sm bg-body py-3 '>
				{loading ?
					<Loading /> :
					<SearchResultTable
						getId={props.getId}
						sortData={sortData}
						breweriesData={breweriesData} />
				}
			</div>
		</div >
	)
}