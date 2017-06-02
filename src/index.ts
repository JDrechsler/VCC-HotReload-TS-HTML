import Vue from "vue";

import index from "./index.vue"

Vue.config.productionTip = false

new Vue({
	el: "#app",
	template: `
    <div>
		<h2>First index.ts - changes in here will not hot reload</h2>
		<index></index>
    </div>
    `,
	components: {
		index
	}
});
