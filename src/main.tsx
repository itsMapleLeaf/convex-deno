import { ConvexProvider, ConvexReactClient } from "convex/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"

const client = new ConvexReactClient((import.meta as any).env.VITE_CONVEX_URL)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ConvexProvider client={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ConvexProvider>,
)
