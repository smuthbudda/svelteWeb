<script>
	import { page } from "$app/stores";
</script>

<header class="header">
	<nav class="navbar">
		<div aria-current={$page.url.pathname === "/" ? "page" : undefined}>
			<a href="/">Athletics App</a>
		</div>
		<div
			aria-current={$page.url.pathname === "/news" ? "page" : undefined}
		>
			<a href="/news">News</a>
		</div>
		<div
			aria-current={$page.url.pathname === "/rankings" ? "page" : undefined}
		>
			<a href="/rankings">Rankings</a>
		</div>
		<div
			aria-current={$page.url.pathname.startsWith("/schedule")
				? "page"
				: undefined}
		>
			<a href="/schedule">Schedule</a>
		</div>
	</nav>
	<button class="auth">Sign-In</button>
</header>

<style>
	.header{
		background-color: var(--gunmetal);
		display: flex;
		justify-content: space-between;
		gap:2rem;
		height: 60px;
		align-items: center;
		padding:0 1rem 0 1rem;
		width: 80%;
		max-width: 1200px;
		margin: 10px auto;
		border-radius: var(--border-radius)	
	}
	
	.auth{
		padding:10px;
		background-color: var(--carrot-orange);
		color: var(--color-bg-2);
		border:none;
		border-radius: var(--border-radius);
		font-weight: 600;
		cursor: pointer;
	}
	
	header>.navbar{
		display: flex;
		gap:2rem;
		align-items: center;
	}

	.navbar>div{
		position: relative;	
	}

	a{
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--color-bg-2);
	}

	.navbar>div[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		bottom: -1.2rem;
		transform: rotate(180deg);
		left: 50%;
		position: absolute;
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--ivory);
	}
</style>
