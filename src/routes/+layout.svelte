<script>
	import '../app.css';
	import Nav from '../lib/nav.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
	:global(body) {
		background-image: linear-gradient(to right, #fff5bf, #f99) !important;
	}
</style>
