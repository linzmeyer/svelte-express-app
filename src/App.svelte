<script>
let launches = [];

async function fetchRockets(e) {
	try {
		const returnValue = await fetch(`/api/v1/launches`)
		const response = await returnValue.json();
		launches = response.data;
	} catch (error) {
		console.error(error);
	}
}
</script>

<main>
<div class="search-box">
	<button on:click={fetchRockets}>Get Rockets</button>
	{#if launches.length > 0}
		<div class="gifs-grid">
			{#each launches as launch (launch.id)}
				<div>
					<p>{launch.name}</p>
					<img src={launch.links.patch.small} alt={launch.name} height="20px" />
				</div>
			{/each}
		</div>
	{:else}
		No launches to show yet
	{/if}
</div>

<div>
	<a href="/about">Link to a About View.</a>
	<a href="/contact">Link to a Contact View.</a>
	<a href="/test">Link to a Test View.</a>
</div>
</main>

<style>

</style>