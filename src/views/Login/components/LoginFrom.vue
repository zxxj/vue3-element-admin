<template>
	<div class="loginform-container">

		<el-form ref="loginFromRef" :model="form" :label-position="labelPosition" label-width="auto" :rules="rules"
			size="small">

			<el-form-item label="用户名:" prop="username">
				<el-input v-model="form.username">
					<template #prefix>
						<svg-icon icon="https://res.lgdsunday.club/user.svg" />
					</template>
				</el-input>
			</el-form-item>

			<el-form-item label="密码:" prop="password">
				<el-input v-model="form.password" />
			</el-form-item>

			<el-form-item>
				<el-button type="primary" class="login_button" @click="handleLogin(loginFromRef)">登录</el-button>
			</el-form-item>

		</el-form>

	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { LoginFromType, RuleForm } from "@/types/LoginFrom"
import type { FormProps, FormInstance, FormRules } from 'element-plus'
import SvgIcon from "@/components/SvgIcon/index.vue"

// 登录表单实例
const loginFromRef = ref<FormInstance>()

// 登录表单数据
const form = reactive<LoginFromType>({
	username: "",
	password: ""
})

// 设置表单label位置
const labelPosition = ref<FormProps['labelPosition']>('right')

// 表单校验规则
const rules = reactive<FormRules<RuleForm>>({
	username: [
		{ required: true, message: "请输入用户名!", trigger: "blur" },
	],
	password: [
		{ required: true, message: "请输入密码!", trigger: "blur" },
	]
})

// 登录逻辑
const handleLogin = async (formEl: FormInstance | undefined) => {
	if (!formEl) return

	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log('ok');
		} else {
			console.log('no');
		}
	})
}
</script>

<style scoped lang="scss">
.loginform-container {
	width: 249px;
	height: 300px;
}

.login_button {
	width: 80%;
	margin-left: 60px;
}
</style>
