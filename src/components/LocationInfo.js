import React from 'react';

const LocationInfo = ({ location }) => {
	return (
		<div className="container col-9 h-120">
			<h2 className="text-center">
				{location.name} <span>(ID: {location.id})</span>
			</h2>
			<div className="d-flex justify-content-between">
				<p>
					<span>Tipo</span>: {location.type}
				</p>
				<p>
					<span>Dimensión</span>: {location.dimension}
				</p>
				<p>
					<span>Población</span>: {location.residents?.length}
				</p>
			</div>
		</div>
	);
};

export default LocationInfo;
