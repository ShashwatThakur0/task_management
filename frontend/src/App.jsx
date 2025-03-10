import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return (
			savedTheme === "dark" ||
			(!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className={`min-h-screen ${
				darkMode ? "bg-gray-900" : "bg-gray-50"
			} transition-colors duration-200`}
		>
			<ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

			<div className="max-w-6xl mx-auto p-8">
				<h1
					className={`text-4xl font-bold ${
						darkMode ? "text-white" : "text-gray-800"
					} mb-8 text-center`}
				>
					Task Manager
				</h1>

				<div
					className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 ${
						darkMode ? "text-gray-200" : "text-gray-600"
					}`}
				>
					<h2 className="text-2xl font-semibold mb-4">
						Welcome to Your Task Manager
					</h2>
					<p className="mb-4">
						This is your personal task management system. Stay organized and
						boost your productivity!
					</p>
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
						Get Started
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Feature Cards */}
					<div
						className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
							darkMode ? "text-gray-200" : "text-gray-600"
						}`}
					>
						<h3 className="text-xl font-semibold mb-3">Create Tasks</h3>
						<p>
							Easily add and organize your daily tasks with just a few clicks.
						</p>
					</div>

					<div
						className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
							darkMode ? "text-gray-200" : "text-gray-600"
						}`}
					>
						<h3 className="text-xl font-semibold mb-3">Track Progress</h3>
						<p>
							Monitor your task completion and track your productivity over
							time.
						</p>
					</div>

					<div
						className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
							darkMode ? "text-gray-200" : "text-gray-600"
						}`}
					>
						<h3 className="text-xl font-semibold mb-3">Stay Organized</h3>
						<p>
							Keep your tasks organized with categories, priorities, and due
							dates.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
