<script lang="ts">
	import type { FullBlog } from '$lib/types';
	import { onMount } from 'svelte';
	import { markdownToHTML } from '$lib';
	import moment from 'moment';

	export let data: FullBlog;

	const date = moment(data.time_posted).format('MMM. Do, YYYY');
	let markdown: string | null = null;

	const fetchMD = async () => {
		const res = await fetch('/api/fetch-blog', {
			method: 'POST',
			body: JSON.stringify(data.article)
		});
		const md = await res.blob();

		markdown = await markdownToHTML(md);
	};

	onMount(() => fetchMD());
</script>

<header class="m-5">
	<h1 class="text-2xl">
		{data.title}
	</h1>
	<h2 class="text-sm text-slate-500 mx-2 my-1">
		Posted {date}
	</h2>
	<h2 class="text-sm text-slate-500 mx-2 my-1">
		By {data.author}
	</h2>
</header>
<img src={data.splashscreen} alt="Hero" class="w-full h-60 object-cover" />
{#if markdown}
	<section class="markdown p-5">
		{@html markdown}
	</section>
{:else}
	<div>Loading ...</div>
{/if}
