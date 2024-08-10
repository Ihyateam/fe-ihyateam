<script lang="ts">
	import type { AcceptLang } from '$lib/types';

	const config = {
		ar: {
			title: `تطوع معنا في فريق إحياء الشبابي`,
			aboutus_title: `فريق إحياء الشبابي:`,
			aboutus_parag: `فريقٌ يقدم برنامجاً ممنهجاً متكاملاً لطلاب وطالبات المرحلة الثانوية المقيمين في مدينة إسطنبول
			والناطقين بالعربية، يهدف لرفع سويتهم في الجوانب الإيمانية والفكرية والثقافية والمهارية
			والاجتماعية.`,
			more_aboutus: `للمزيد عن فريق إحياء:`,
			more_link: `اضغط هنا للمزيد عن فريق إحياء`,
			social_media_title: `صفحاتنا على المنصات الاجتماعية:`,
			contact_us: `للاستفسارات حول الفريق تواصل معنا عبر الرقم التالي:`
		},

		en: {
			title: `Volunteer with us in the Youth Ihyateam`,
			aboutus_title: `Youth Ihyateam:`,
			aboutus_parag: `A team that provides a comprehensive systematic program for high school students residing in Istanbul and speaking Arabic, aiming to raise their level in the faith, intellectual, cultural, skill and social aspects.`,
			more_aboutus: `To learn more about Ihyateam:`,
			more_link: `Click here to learn more about Ihyateam`,
			social_media_title: `Our pages on social media:`,
			contact_us: 'For inquiries about the team, contact us at the following number:'
		},

		de: {
			title: `Freiwilligenarbeit bei uns im Jugend-Ihyateam`,
			aboutus_title: `Jugend-Ihyateam:`,
			aboutus_parag: `Ein Team, das ein umfassendes systematisches Programm für Schülerinnen und Schüler der Sekundarstufe anbietet, die in Istanbul leben und Arabisch sprechen, mit dem Ziel, ihr Niveau in den Bereichen Glaube, intellektuell, kulturell, fähig und sozial zu erhöhen.`,
			more_aboutus: `Mehr über Ihyateam erfahren:`,
			more_link: `Klicken Sie hier, um mehr über Ihyateam zu erfahren`,
			social_media_title: `Unsere Seiten in sozialen Medien:`,
			contact_us: 'Für Anfragen zum Team kontaktieren Sie uns unter folgender Nummer:'
		}
	};

	export let lang: AcceptLang = 'ar';
</script>

<main>
	<h2>{config[lang].title}</h2>

	<section class="aboutus">
		<h3>{config[lang].aboutus_title}</h3>
		<p>
			{config[lang].aboutus_parag}
		</p>
	</section>

	<section>
		<h3>{config[lang].more_aboutus}</h3>
		<a
			href="//canva.com/design/DAFd-_oUe1o/6FTvy1vMgGMNGEHf-UkNuQ/view"
			target="_blank"
			referrerpolicy="no-referrer"
		>
			{config[lang].more_link}
		</a>
	</section>

	<section>
		<h3>{config[lang].social_media_title}</h3>
		<div class="social-media">
			<a href="//www.instagram.com/ihayteam" target="_blank" referrerpolicy="no-referrer">
				<i class="link instagram" />
			</a>

			<a href="//www.facebook.com/ihayteam" target="_blank" referrerpolicy="no-referrer">
				<i class="link facebook" />
			</a>

			<a href="//www.youtube.com/@ihyateam" target="_blank" referrerpolicy="no-referrer">
				<i class="link youtube" />
			</a>
			<a href="//wa.me/+90551085521" target="_blank">
				<i class="link whatsapp" />
			</a>
		</div>
	</section>

	<section>
		<h3>{config[lang].contact_us}</h3>
		<div class="tel">
			<a dir="ltr" href="tel:+905510855212">+905510855212</a>
		</div>
	</section>
	<hr />
</main>

<style>
	hr {
		border: none;
		border-top: 3px double #333;
		color: #333;
		overflow: visible;
		text-align: center;
		height: 5px;
		margin: 0.5rem 0;
	}

	hr::after {
		background: var(--secondary-background-color);
		content: '§';
		font-family: monospace;
		padding-inline: 4px;
		position: relative;
		top: -12px;
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		letter-spacing: 1px;
	}

	.tel {
		display: inline-flex;
		align-content: center;
		align-items: center;
		gap: 0.25rem;

		width: max-content;
		height: fit-content;
	}

	.whatsapp {
		display: inline-block;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 258'%3E%3Cdefs%3E%3ClinearGradient id='logosWhatsappIcon0' x1='50%25' x2='50%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='black'/%3E%3Cstop offset='100%25' stop-color='black'/%3E%3C/linearGradient%3E%3ClinearGradient id='logosWhatsappIcon1' x1='50%25' x2='50%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f9f9f9'/%3E%3Cstop offset='100%25' stop-color='%23fff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logosWhatsappIcon0)' d='M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004'/%3E%3Cpath fill='url(%23logosWhatsappIcon1)' d='M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z'/%3E%3Cpath fill='%23fff' d='M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64'/%3E%3C/svg%3E");
	}

	a:hover .whatsapp {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 258'%3E%3Cdefs%3E%3ClinearGradient id='logosWhatsappIcon0' x1='50%25' x2='50%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%231faf38'/%3E%3Cstop offset='100%25' stop-color='%2360d669'/%3E%3C/linearGradient%3E%3ClinearGradient id='logosWhatsappIcon1' x1='50%25' x2='50%25' y1='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f9f9f9'/%3E%3Cstop offset='100%25' stop-color='%23fff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23logosWhatsappIcon0)' d='M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004'/%3E%3Cpath fill='url(%23logosWhatsappIcon1)' d='M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z'/%3E%3Cpath fill='%23fff' d='M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64'/%3E%3C/svg%3E");
	}

	.social-media {
		display: flex;
		gap: 0.25rem;
		padding: 0.125rem;
		align-items: center;
	}

	.social-media > a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 4px;
		background-color: hsla(0, 0%, 0%, 0.1);
	}

	.social-media > a:hover {
		background: radial-gradient(#fff, #ddd);
	}

	h2 {
		align-self: center;
		max-width: 100%;
		text-align: center;
		font-size: 1.75rem;

		white-space: unset;
		text-wrap: balance;

		position: relative;
		color: hsl(188.1, 92%, 37.8%);
	}

	h3 {
		color: var(--button-background-color);
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.link {
		width: 1.25rem;
		height: 1.25rem;
	}

	.facebook {
		display: inline-block;
		background-repeat: no-repeat;
		background-size: contain;
		background-size: 100% 100%;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath fill='%23666666' d='M116.42 5.07H11.58a6.5 6.5 0 0 0-6.5 6.5v104.85a6.5 6.5 0 0 0 6.5 6.5H68V77.29H52.66V59.5H68V46.38c0-15.22 9.3-23.51 22.88-23.51a126 126 0 0 1 13.72.7v15.91h-9.39c-7.39 0-8.82 3.51-8.82 8.66V59.5H104l-2.29 17.79H86.39v45.64h30a6.51 6.51 0 0 0 6.5-6.5V11.58a6.5 6.5 0 0 0-6.47-6.51'/%3E%3C/svg%3E");
		background-image: var(--svg);
	}

	a:hover > .facebook {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='118.35' height='118.35' x='4.83' y='4.83' fill='%233d5a98' rx='6.53' ry='6.53'/%3E%3Cpath fill='%23fff' d='M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z'/%3E%3C/svg%3E");
	}

	.youtube {
		display: inline-block;
		background-repeat: no-repeat;
		background-size: contain;
		background-size: 100% 100%;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1280'%3E%3Cpath fill='%23000' d='m711 872l484-250l-484-253zM896 10q168 0 324.5 4.5T1450 24l73 4q1 0 17 1.5t23 3t23.5 4.5t28.5 8t28 13t31 19.5t29 26.5q6 6 15.5 18.5t29 58.5t26.5 101q8 64 12.5 136.5T1792 532v176q1 145-18 290q-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19t-28 12.5t-28.5 8t-24 4.5t-23 3t-16.5 1.5q-251 19-627 19q-207-2-359.5-6.5T336 1256l-49-4l-36-4q-36-5-54.5-10t-51-21t-56.5-41q-6-6-15.5-18.5t-29-58.5T18 998q-8-64-12.5-136.5T0 748V572q-1-145 18-290q7-55 25-99.5T75 121l14-17q14-15 29-26.5T149 58t28-13t28.5-8t23.5-4.5t23-3t17-1.5q251-18 627-18'/%3E%3C/svg%3E");
		background-image: var(--svg);
	}

	a:hover > .youtube {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 180'%3E%3Cpath fill='%23f00' d='M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134'/%3E%3Cpath fill='%23fff' d='m102.421 128.06l66.328-38.418l-66.328-38.418z'/%3E%3C/svg%3E");
	}

	.instagram {
		display: inline-block;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cg fill='none'%3E%3Crect width='256' height='256' fill='url(%23skillIconsInstagram0)' rx='60'/%3E%3Crect width='256' height='256' fill='url(%23skillIconsInstagram1)' rx='60'/%3E%3Cpath fill='%23fff' d='M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334'/%3E%3Cdefs%3E%3CradialGradient id='skillIconsInstagram0' cx='0' cy='0' r='1' gradientTransform='matrix(0 -253.715 235.975 0 68 275.717)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='black'/%3E%3Cstop offset='.1' stop-color='black'/%3E%3Cstop offset='.5' stop-color='black'/%3E%3Cstop offset='1' stop-color='black'/%3E%3C/radialGradient%3E%3CradialGradient id='skillIconsInstagram1' cx='0' cy='0' r='1' gradientTransform='matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='black'/%3E%3Cstop offset='.128' stop-color='black'/%3E%3Cstop offset='1' stop-color='black' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
	}

	a:hover > .instagram {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cg fill='none'%3E%3Crect width='256' height='256' fill='url(%23skillIconsInstagram0)' rx='60'/%3E%3Crect width='256' height='256' fill='url(%23skillIconsInstagram1)' rx='60'/%3E%3Cpath fill='%23fff' d='M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334'/%3E%3Cdefs%3E%3CradialGradient id='skillIconsInstagram0' cx='0' cy='0' r='1' gradientTransform='matrix(0 -253.715 235.975 0 68 275.717)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fd5'/%3E%3Cstop offset='.1' stop-color='%23fd5'/%3E%3Cstop offset='.5' stop-color='%23ff543e'/%3E%3Cstop offset='1' stop-color='%23c837ab'/%3E%3C/radialGradient%3E%3CradialGradient id='skillIconsInstagram1' cx='0' cy='0' r='1' gradientTransform='matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%233771c8'/%3E%3Cstop offset='.128' stop-color='%233771c8'/%3E%3Cstop offset='1' stop-color='%2360f' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
	}
</style>
