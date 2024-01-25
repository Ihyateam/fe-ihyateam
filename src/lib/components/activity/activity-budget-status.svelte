
 <script>


	let config = {
		ar: {
			budget: 'الميزانية',
			spend: 'المصروفات',
			remaining: 'المتبقي'
		}
	};
    </script>

	<ul class="flex">

		<li>
			<span class="label">{config['ar'].budget}</span>
			<span class="value">50,000.00₺</span>
		</li>
		<li>
			<span class="label">{config['ar'].spend}</span>
			<span class="value">40.000.00₺</span>
		</li>
		<li>
			<span class="label">{config['ar'].remaining}</span>
			<span class="value">10,000.00₺</span>
		</li>
	</ul>

    <style>

	.flex {
		display: flex;
		justify-content: space-between;
		border-radius: 4px;
		overflow: hidden;
		outline: var(--base-outline-nocolor) var(--blue-color-3);
		min-height: 10ch;
		background-color: var(--blue-color-4);
	}

	ul > li {
		flex-grow: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.5rem 1rem;
	}

	.label {
		font-size: 1.25rem;
		color: black;
		font-weight: 700;
	}

	.value {
		letter-spacing: 1.5px;
		font-size: 1.25rem;
		margin-block-start: 0.5rem;
	}

	li:not(:last-child) {
		border-inline-end: var(--base-outline);
		border-inline-end-width: 4px;
		border-inline-end-color: hsla(0, 0%, 100%, 0.5);
	}

	@container balance (width < 400px) {
		.flex {
			flex-direction: column;
		}

		.flex > li {
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			justify-content: space-between;
		}

		.value {
			margin-block-start: 0.25rem;
		}

		li:not(:last-child) {
			border-inline-end: none;
			border-block-end: var(--base-outline);
			border-block-end-width: 4px;
			border-block-end-color: hsla(0, 0%, 100%, 0.5);
		}
	}
    </style>