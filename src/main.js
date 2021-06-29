import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		todos : [
			{ title: "kill", isComplete: false },
			{ title: "kill", isComplete: true },
		  ]
	}
});

export default app;