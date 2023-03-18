import React from "react";
import ListOfTasks from "./ListOfTasks.jsx"
import Tasks from "./Tasks.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<><div className="text-center">
			<h1 className="text-center mt-5">todos</h1>
		</div><div>Tasks</div><div>ListOfTasks</div></>
	);
};

export default Home;
