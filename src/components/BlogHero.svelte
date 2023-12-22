<script lang="ts">
	import type { Blog } from '$lib/types';
	import moment from 'moment';

	export let blog: Blog;

	const date = moment(blog.time_posted).format('MMM. Do, YYYY');
</script>

<a
	class="w-full min-w-55 aspect-square p-2 relative brightness-50 transition-all border-2 border-slate-900 rounded-lg hover:brightness-90"
	href={`/blogs/${blog.id}`}
>
	<div class="z-10 relative w-full h-full flex flex-col">
		<div class="flex items-center">
			<h2 class="text-lg">{blog.title}</h2>
			<p class="text-xs h-4 mx-1 text-slate-400">- {blog.author}</p>
		</div>
		<p class="m-2 text-sm line-clamp-6">{blog.summary}</p>
		<h3 class="absolute bottom-0 left-0 m-2 text-md">{date}</h3>
	</div>
	<img
		class="absolute top-0 left-0 w-full h-full object-cover blur-xs opacity-45 z-0"
		src={blog.image_src}
		alt={blog.title}
	/>
</a>
