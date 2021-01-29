import { readable } from 'svelte/store';

let settings = {
	author: process.env.AUTHOR || 'AOK',
	company: process.env.COMPANY || 'SanJosePintor',
	phone: process.env.PHONE || '8377-7683',
	cities: process.env.CITIES || 'San Jose & Heredia',
	email: process.env.EMAIL || 'contact@sanjosepintor.com',
	instagurl: process.env.INSTAGURL || 'https://www.instagram.com/sanjosepintor/',
	googleurl: process.env.GOOGLEURL || 'https://maps.google.com/?cid=8585301736328483035',
	price: process.env.PRICE || 5,
	exchangeRate: process.env.EXCHANGERATE || 582
}

export const siteSettings = readable(settings);