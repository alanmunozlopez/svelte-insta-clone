import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Alan',
		lastName: 'Munoz'
	}
});

export default app;