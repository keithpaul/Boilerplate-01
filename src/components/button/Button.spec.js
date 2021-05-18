import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';

describe('button.vue', () => {
	it('renders props.msg when passed', () => {
		const label = 'new message';
		const wrapper = shallowMount(Button, {
			propsData: { label },
		});
		expect(wrapper.text()).toMatch(label);
	});
});
