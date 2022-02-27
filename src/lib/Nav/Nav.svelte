<script lang="typescript">
	export let userName = 'Chris Gala';
</script>

<nav class="nav">
  <div class="nav-logo">
    RMFI
  </div>

  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/about">About</a>
    <a class="nav-link" href="/donate">Donate</a>
  </div>

  <div class="nav-user">
    {userName}
  </div>
</nav>

<style>
	nav {
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
    display: flex;
		font-size: 1.25rem;
		font-weight: lighter;
    height: 3rem;
    position: fixed;
    top: 0;
    width: 100%;
	}

  .nav-logo,
  .nav-user {
    padding: 0 1.5rem;
  }

  .nav-logo {
    flex-grow: 1;
  }

  .nav-links {
    flex-grow: 2;
    text-align: center;
  }

  .nav-link {
    color: black;
    padding: 0 2rem;
    text-decoration: none;
  }

  .nav-user {
    flex-grow: 1;
    text-align: right
  }
</style>
