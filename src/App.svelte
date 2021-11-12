<script>
let launches = [];
let searchTerm = "";

async function fetchRockets(e) {
	try {
		const returnValue = await fetch(`/api/v1/launches?id=${searchTerm}`)
		const response = await returnValue.json();
		launches = response.data;
	} catch (error) {
		console.error(error);
	}
}
</script>

<main>
<div class="search-box">
	<input type="text" placeholder="Search for gif" bind:value={searchTerm} />
	<button on:click={fetchRockets}>Get Rockets</button>
	{#if launches.length > 0}
		<div class="gifs-grid">
			{#each launches as launch (launch.id)}
				<img src={launch.links.patch.small} alt={launch.name} height="200px" />
			{/each}
		</div>
	{:else}
		No launches to show yet
	{/if}
</div>
</main>

<style>

</style>