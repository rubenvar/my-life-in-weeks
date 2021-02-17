import { Writable, writable } from 'svelte/store';

export const showMenu: Writable<boolean> = writable(false);

export const dateString: Writable<string> = writable('1990-07-31');

function createYearsToLive() {
  const {subscribe, set, update} = writable(60);
  return {
    subscribe,
    // custom methods to make easier to update
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    set,
  };
}
export const yearsToLive = createYearsToLive();