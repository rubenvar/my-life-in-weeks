import { Writable, writable } from 'svelte/store';

export const showMenu: Writable<boolean> = writable(false);

export const yearsToLive: Writable<number> = writable(50);
export const dateString: Writable<string> = writable('1990-07-31');