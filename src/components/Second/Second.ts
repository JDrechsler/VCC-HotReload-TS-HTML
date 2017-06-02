import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	template: `<section>
	<h2>Second! {{msg}}</h2>
	<h4> Inline editing made possible with Template Literal Editor!</h4>
</section>`
})
export default class Second extends Vue {
	msg: string = 'Hey, Second!!!'
}