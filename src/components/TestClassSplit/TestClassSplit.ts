import Vue from 'vue'
import Component from 'vue-class-component'

import Second from './../Second/Second'

@Component({
	template: require("./TestClassSplit.html"),
	props: {
		propMessage: String
	},
	components: {
		Second
	}
})
export default class TestClassSplit extends Vue {
	propMessage: string
	msg: number = 123
	helloMsg: string = 'Hello, ' + this.propMessage

	mounted() {
		this.greet()
	}

	get computedMsg() {
		return 'computed ' + this.msg
	}

	greet() {
		console.log('greeting: ' + this.msg)
	}
}