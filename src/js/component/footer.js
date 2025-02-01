import React from "react";
import "../../styles/footer.css"

export const Footer = () => {
	return (
		<footer className="footer bg-black text-center text-white py-3 mt-5">
			<p className="mb-0">
				By{" "}
				<a
					href="https://github.com/felipecoste"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link"
				>
					Felipe Coste
				</a>
			</p>
		</footer>
	);
};
