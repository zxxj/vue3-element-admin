<template>
	<div class="mario-container">
		<vue-particles id="tsparticles" :options="options" />
	</div>
</template>


<script setup lang="ts">
const options = {
	particles: {
		move: {
			enable: true,
			speed: { min: 1, max: 10 }
		},
		number: {
			value: 10,
			max: 20
		},
		opacity: {
			value: 1
		},
		rotate: {
			path: true
		},
		shape: {
			options: {
				image: {
					gif: true,
					height: 200,
					src: "https://particles.js.org/images/mario.gif",
					width: 200
				}
			},
			type: "image"
		},
		size: {
			value: {
				min: 32,
				max: 64
			}
		}
	}
}

</script>

<style scoped lang="scss"></style>
