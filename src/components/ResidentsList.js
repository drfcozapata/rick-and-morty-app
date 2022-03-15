import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({ residents }) => {
	console.log(residents);

	return (
		<div className="container col-10">
			<h2 className="ml-2 mb-4 display-5">Lista de Residentes</h2>
			<div className="flex-list">
				{residents?.map(resident => (
					<ResidentInfo resident={resident} />
				))}
			</div>
		</div>
	);
};

export default ResidentsList;
