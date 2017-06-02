<template>
	<section>
		<h3>Start</h3>
		<TestClassSplit propMessage="Johannes"></TestClassSplit>
		<Second></Second>
	</section>
</template>

<script>
	import Vue from "vue";

	import TestClassSplit from './components/TestClassSplit/TestClassSplit'
	import Second from './components/Second/Second'

	export default ({
		components: {
			TestClassSplit,
			Second
		}
	})

</script>
