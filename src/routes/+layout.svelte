<script>
	import RouteBar from '../components/RouteBar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="w-screen h-screen bg-slate-900">
	<header class="w-screen h-16 bg-slate-800 text-slate-200 flex items-center px-3">
		<a href="/" rel="nofollow" class="text-2xl mx-3">Polar Post</a>
		<RouteBar />
	</header>
	<slot />
</main>
