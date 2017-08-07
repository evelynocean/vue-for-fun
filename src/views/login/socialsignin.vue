<template>
	<div class="social-signup-container">
		<div class="sign-btn" @click="wechatHandleClick('wechat')">
			<span class="wx-svg-container"><icon-svg icon-class="weixin" class="icon"></icon-svg></span> 微信
		</div>
		<div class="sign-btn" @click="tencentHandleClick('tencent')">
			<span class="qq-svg-container"><icon-svg icon-class="QQ" class="icon"></icon-svg></span> QQ
		</div>
	</div>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.social-signup-container {
			margin: 20px 0;
			.sign-btn {
					display: inline-block;
					cursor: pointer;
			}
			.icon {
					color: #fff;
					font-size: 30px;
					margin-top: 6px;
			}
			.wx-svg-container,
			.qq-svg-container {
					display: inline-block;
					width: 40px;
					height: 40px;
					line-height: 40px;
					text-align: center;
					padding-top: 1px;
					border-radius: 4px;
					margin-bottom: 20px;
					margin-right: 5px;
			}
			.wx-svg-container {
					background-color: #8dc349;
			}
			.qq-svg-container {
					background-color: #6BA2D6;
					margin-left: 50px;
			}
	}
</style>
