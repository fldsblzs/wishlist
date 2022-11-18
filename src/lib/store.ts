import { setContext, getContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const key = Symbol();

export const createStore = (): Writable<boolean> => {
	return setContext(key, writable(false));
};

export const getStore = (): Writable<boolean> => {
	return getContext(key);
};