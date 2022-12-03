<script lang="ts">
	import PokeDetailsCard from '../../../lib/pokedetailscard.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let id = data.id;
</script>

<PokeDetailsCard {id} />
