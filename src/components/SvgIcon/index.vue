<template>

	<!-- 外部图标 -->
	<div v-if="isExternal" class="svg-external-icon svg-icon" :style="externalIconStyle" :class="className"></div>

	<!-- 内部图标 -->
	<svg v-if="!isExternal" class="svg-icon" :class="className" aria-hidden="true">
		<use :xlink:href="iconPrefixName" />
	</svg>

</template>

<script setup lang="ts">
import type { SvgIconPropsType } from "@/types/ScgIcon";
import { isExternal as external } from "@/utils/validateSvgiconPath";
import { computed } from "vue"

const props = defineProps<SvgIconPropsType>()

// 判断传入的图标是否为外部图标
const isExternal = computed(() => external(props.icon))
console.log(isExternal);

// 设置外部图标的样式
const externalIconStyle = computed(() => ({
	mask: `url(${props.icon}) no-repeat 50% 50%`,
	'webkit-mask': `url(${props.icon} no-repeat 50% 50%)`
}))

// 内部图标
const iconPrefixName = computed(() => `${props.icon}`)

</script>

<style scoped lang="scss">
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -.15em;
	fill: currentColor;
	overflow: hidden;
}

.svg-external-icon {
	background-color: currentColor;
	mask-size: cover !important;
	display: inline-block;
}
</style>
