import React from "react";

import TestComponent from "./components/test-component";

function App() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}>
			<TestComponent />
		</div>
	);
}

export default App;
