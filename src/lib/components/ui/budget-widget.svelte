<script>
	let config = {
		ar: {
			budget: 'الميزانية',
			spend: 'المصروفات',
			remaining: 'المتبقي'
		}
	};
</script>

<section class="container-balance">
	<ul class="flex">
		<li>
			<span class="label">{config['ar'].budget}</span>
			<span class="value">50,000.00₺</span>
		</li>
		<li>
			<span class="label">{config['ar'].spend}</span>
			<span class="value spending">40.000.00₺</span>
		</li>
		<li>
			<span class="label">{config['ar'].remaining}</span>
			<span class="value remaining">10,000.00₺</span>
		</li>
	</ul>
</section>

<style>
	.container-balance {
		container-name: balance;
		container-type: inline-size;
		grid-column: span 3;
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

	.spending::after {
		content: ' -';
	}

	.remaining::after {
		content: ' +';
	}

	.flex {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		height: 100%;
		gap: 1rem;

		& > li {
			min-width: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0.5rem 1rem;
			background-color: red;
			border-radius: 10px;
		}
	}

	@container balance (width < 550px) {
		.flex {
			grid-template-columns: auto;
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
	}
</style>
