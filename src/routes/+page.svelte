<script lang="ts">
	import { onMount } from 'svelte';
	import BlogHero from '../components/BlogHero.svelte';

	export let data: any;

	let columns = 'grid-cols-1';
	const gridCols = [
		'grid-cols-1',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-cols-5',
		'grid-cols-6',
		'grid-cols-7',
		'grid-cols-8',
		'grid-cols-9',
		'grid-cols-10',
		'grid-cols-11',
		'grid-cols-12'
	];

	const handleColumnsCheck = () => {
		const numberOfNeededColumns = Math.ceil(window.innerWidth / 300) - 1;

		columns = gridCols[numberOfNeededColumns];
	};

	onMount(() => {
		window.addEventListener('resize', handleColumnsCheck);

		handleColumnsCheck();
	});
</script>

<main>
	<section class="p-5">
		<title class="text-2xl w-full flex justify-center pb-5">Top Blogs</title>
		<div class={`grid ${columns} gap-2`}>
			{#each data.blogs as blog}
				<BlogHero {blog} />
			{/each}
		</div>
	</section>
</main>
