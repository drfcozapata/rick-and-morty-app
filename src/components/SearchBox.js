import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({ setLocation }) => {
	const [searchId, setSearchId] = useState('');

	const searchLocation = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${searchId}`)
			.then(res => setLocation(res.data));
		setSearchId('');
	};

	return (
		<div className="d-flex justify-content-center search">
			<input
				type="text"
				onChange={e => setSearchId(e.target.value)}
				value={searchId}
				className="col-9 text-center"
				placeholder="Indica un ID de localización entre 1 y 126"
			/>
			<button
				className="btn btn-sm btn-outline-secondary"
				onClick={searchLocation}
			>
				Buscar ID
			</button>
		</div>
	);
};

export default SearchBox;
