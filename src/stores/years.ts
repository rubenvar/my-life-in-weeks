import { writable } from 'svelte/store';

function createYears() {
  const {subscribe, set, update} = writable(60);
  return {
    subscribe,
    set,
    // custom methods to make easier to update
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
  };
}

export const yearsToLive = createYears();