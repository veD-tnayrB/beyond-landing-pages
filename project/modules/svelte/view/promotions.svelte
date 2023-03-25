<script lang="ts">
	import BeyondSVG from './icons/beyond.svelte';
	import SvelteSVG from './icons/svelte.svelte';
</script>

<div class="promotion">
	<div class="logos">
		<BeyondSVG />
		<SvelteSVG />
	</div>

	<h2>BeyondJS + Svelte</h2>
</div>

<style lang="scss">
	.promotion {
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1.5rem;
		}

		h2 {
			font-size: 2.5rem;
		}
	}
</style>
