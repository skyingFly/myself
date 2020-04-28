<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<home-page1 />
			</div>
			<div class="swiper-slide">
				<home-page2 />
			</div>
			<div class="swiper-slide">
				<home-page3 />
			</div>
			<div class="swiper-slide">
				<home-page4 />
			</div>
			<div class="swiper-slide">
				<home-page5 />
			</div>
		</div>
  	</div>
</template>

<script>
import Swiper from "swiper"
import HomePage1 from './homePage1'
import HomePage2 from './homePage2'
import HomePage3 from './homePage3'
import HomePage4 from './homePage4'
import HomePage5 from './homePage5'
export default {
	data() {
		return {
		}
	},
	components: {
        HomePage1,
		HomePage2,
		HomePage3,
		HomePage4,
		HomePage5
	},
	computed: {
        pageNum () {
            return this.$store.state.pageNum
        }
	},
	watch: {
		pageNum (val) {
			window.mySwiper.slideTo(val - 1, 1000, false)
		}
	},
	mounted() {
		const that = this
		window.mySwiper = new Swiper('.swiper-container', {
			direction : 'vertical',
			onSlideChangeStart: function(swiper){
				that.$store.commit("pageChange", swiper.activeIndex + 1)
			}
		})
	}
}
</script>

<style scoped lang="scss">
.swiper-container {
	width: 100%;
	height: 100vh;
}
</style>
