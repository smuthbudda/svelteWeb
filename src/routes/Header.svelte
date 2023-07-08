<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/svelte-logo.svg";
	import github from "$lib/images/github.svg";
</script>

<header>
	<nav>
		<div aria-current={$page.url.pathname === "/" ? "page" : undefined}>
			<a href="/">Home</a>
		</div>
		<div
			aria-current={$page.url.pathname === "/about" ? "page" : undefined}
		>
			<a href="/about">About</a>
		</div>
		<div
			aria-current={$page.url.pathname.startsWith("/sverdle")
				? "page"
				: undefined}
		>
			<a href="/sverdle">Sverdle</a>
		</div>
	</nav>
</header>

<style>
</style>
