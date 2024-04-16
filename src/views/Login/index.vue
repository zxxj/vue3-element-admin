<template>
	<div class="login-container">
		<div class="left">
			<vue-particles id="tsparticles" :options="options" />
		</div>
		<div class="right">123</div>
	</div>
</template>


<script setup lang="ts">

const options = {
	particles: {
		move: {
			enable: true,
			speed: { min: 1, max: 6 }
		},
		number: {
			value: 20,
			max: 30
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

<style scoped lang="scss">
.login-container {
	display: flex;
	width: 100vw;
	height: 100vh;
	background-color: #000;

	.left {
		flex: 1;
	}

	.right {
		width: 350px;
		background-color: #fff;
	}
}
</style>
