import { writable } from 'svelte/store';

export const showMenu = writable(false);

export const yearsToLive = writable(50);
export const dateString = writable('1990-07-31');