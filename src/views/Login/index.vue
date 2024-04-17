<template>
	<div class="login-container">
		<div class="left">
			<Mario />
		</div>
		<div class="right">
			<LoginFrom />
		</div>
	</div>
</template>


<script setup lang="ts">
import Mario from "./components/Mario.vue"
import LoginFrom from "./components/LoginFrom.vue"

</script>

<style scoped lang="scss">
.login-container {
	display: flex;
	width: 100vw;
	height: 100vh;

	.left {
		flex: 1;
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 350px;
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}
}
</style>
