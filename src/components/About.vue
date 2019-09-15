<template>
	<div class="container">
		<h3>Hakkımda</h3>
		<hr>
		<p>Yazılım Mühendisi Mert DEMİR</p>
		<button @click="$router.push('/')" class="btn btn-outline-info">Geri</button>
		<button @click="geri" class="btn btn-outline-success">Geri2</button>
	</div>
</template>

<script>
	export default {
		methods : {
			geri(){
				this.$router.push("/")
			}
		}
	}
</script>




