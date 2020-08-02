import { readable } from 'svelte/store';

let settings = {
	author: 'AOK',
	company: 'SanJosePintor',
	phone: '8377-7683',
	cities: 'San Jose & Heredia',
	email: 'contact@sanjosepintor.com',
	instagurl: 'https://www.instagram.com/sanjosepintor/',
	googleurl: 'https://maps.google.com/?cid=8585301736328483035',
	price: 5,
	exchangeRate: 582
}

export const siteSettings = readable(settings);