<script>
  import '../styles/fonts.css';
  import '../styles/layout.css';

	import { Nav } from '$lib';
</script>

<Nav userName="Chris" />

<main>
  <slot></slot>
</main>