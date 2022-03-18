import { writable } from 'svelte/store';

function createMenu() {
  const { set, subscribe, update } = writable(false);

  return {
    set,
    subscribe,
    toggle: () => update((val) => !val),
  }
}

export const showMenu = createMenu();
