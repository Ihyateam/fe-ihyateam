<script>
	import { page } from '$app/stores';
	const tabs = [
		{
			attr: {
				['data-id']: 'news',
				['data-tooltip']: 'نشرة الأخبار'
			},
			props: {
				news: 'news',
				details: 'details',
				id: 'id'
			}
		},
		{
			attr: {
				['data-id']: 'fav',
				['data-tooltip']: 'المفضلة'
			},
			props: { id: 'fav' }
		},
		{
			attr: {
				['data-id']: 'tools',
				['data-tooltip']: 'الأدوات'
			},
			props: { id: 'tools' }
		}
	];
</script>

<div class="activity__div">
	<!-- <menu>
		{#each tabs as tab}
			<button
				type="button"
				class="tab"
				data-id={tab.attr['data-id']}
				class:active={$page.url.href.includes(tab.attr['data-id'])}
				data-tooltip={tab.attr['data-tooltip']}>{tab.props.id}</button
			>
		{/each}
	</menu> -->
	<slot />
</div>

<style>
	.activity__div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		/* outline: 1px solid red; */

		& menu {
			height: 2.5rem;
			width: 100%;
			display: flex;
			justify-content: flex-start;

			& button {
				min-width: 60px;
				cursor: pointer;
				appearance: none;

				&:first-of-type {
					border-top-left-radius: 10px;
				}

				&:last-of-type {
					border-top-right-radius: 10px;
				}
			}
		}
	}
</style>
