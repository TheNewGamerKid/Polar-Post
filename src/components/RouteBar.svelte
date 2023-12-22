<script>
	import HeaderRoute from './HeaderRoute.svelte';
</script>

<section class="h-full flex flex-col mx-2">
	<div class="grow">
		<HeaderRoute href="/" title="Home" />
		<HeaderRoute href="/tutorials" title="Tutorials" />
		<HeaderRoute href="/blogs" title="Blogs" />
		<HeaderRoute href="/discussions" title="Discussions" />
	</div>
</section>
