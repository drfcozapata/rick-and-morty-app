import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<p className="text-center">
							Todos los derechos reservados &copy; {new Date().getFullYear()} by
							Francisco Zapata
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
