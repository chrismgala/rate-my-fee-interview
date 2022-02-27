<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Nav from './Nav.svelte';
</script>

<Meta
	title="Components/Nav"
	component={Nav}
	argTypes={{
		userName: { control: 'text' }
	}}
/>

<Template let:args>
	<Nav {...args} />
</Template>

<Story
	name="Bhavin"
	args={{
		userName: 'Bhavin'
	}}
/>

<Story
	name="Gautam"
	args={{
		userName: 'Gautam'
	}}
/>

<Story
	name="Ami"
	args={{
		userName: 'Ami'
	}}
/>