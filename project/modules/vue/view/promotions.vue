<template>
	<div className="promotion">
		<div className="logos">
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
h2 {
	font-size: 2.5rem;
	text-align: center;
}

.logos {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
}
</style>
