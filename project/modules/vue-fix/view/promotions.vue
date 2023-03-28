<template>
	<div class="promotion">
		<div class="logos">
			<BeyondSVG />
			<SvelteSVG />
		</div>

		<h2>BeyondJS + Vue</h2>
	</div>
</template>

<script lang="ts">
import BeyondSVG from './beyond.vue';
import SvelteSVG from './vue.vue';

export default {
	components: {
		BeyondSVG,
		SvelteSVG,
	},
};
</script>

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
