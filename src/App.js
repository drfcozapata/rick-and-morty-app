import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox';

function App() {
	// LocationInfo
	const [location, setLocation] = useState({});

	useEffect(() => {
		const randomLocation = Math.floor(Math.random() * 126) + 1;
		axios
			.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
			.then(res => setLocation(res.data));
	}, []);

	console.log(location);

	return (
		<div className="wrapper">
			<Header />
			<SearchBox setLocation={setLocation} />
			<LocationInfo location={location} />
			<ResidentsList residents={location?.residents} />
			<Footer />
		</div>
	);
}

export default App;
