import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ resident }) => {
	const [residentInfo, setResidentInfo] = useState({});

	useEffect(() => {
		axios.get(resident).then(res => setResidentInfo(res.data));
	}, [resident]);

	return (
		<div className="text-white mb-3 d-flex align-items-center w-480">
			<img
				className="img-210"
				src={residentInfo.image}
				alt="Imagen de {residentInfo.name}"
			/>
			<div className="ml-2">
				<h2>{residentInfo.name}</h2>
				<p>
					<span>Status</span>: {residentInfo.status}
				</p>
				<p>
					<span>Origen</span>: {residentInfo.origin?.name}
				</p>
				<p>
					<span>Epidodes</span>: {residentInfo.episode?.length}
				</p>
			</div>
		</div>
	);
};

export default ResidentInfo;
