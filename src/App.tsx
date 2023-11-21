import { useQuery, useMutation } from "convex/react"
import { api } from "./convex.ts"

const reactLogoUrl = new URL("./assets/react.svg", import.meta.url).href

export function App() {
	const tasks = useQuery(api.tasks.list)
	const create = useMutation(api.tasks.create)
	return (
		<>
			<button
				onClick={() => {
					const name = prompt("Task name?")
					if (name) create({ text: name })
				}}
			>
				Create
			</button>
			<ul>
				{tasks?.map((task) => (
					<li key={task._id}>{task.text}</li>
				))}
			</ul>
		</>
	)
}
