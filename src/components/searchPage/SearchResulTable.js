import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchResultTable(props) {
	return (
		<table className="table caption-top py-5 ">
			<thead onClick={props.sortData} className="table-light">
				<tr className='border-top'>
					<th className="sort-by-field" scope="col">#</th>
					<th className="sort-by-field" scope="col">Name</th>
					<th className="sort-by-field" scope="col">Location</th>
					<th scope="col" className="none-click"></th>
				</tr>
			</thead>
			<tbody>
				{props.breweriesData.map(({ id, name, city, country }, i) => {
					return (
						<tr key={i}>
							<td key={id}>{id}</td>
							<td >{name}</td>
							<td >{`${city}, ${country}`}</td>
							<td>
								<Link
									to={'/breweryInfo/' + id}
									id={id}
									type="button"
									className="btn btn-primary  btn-sm">
									See more
								</Link>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}