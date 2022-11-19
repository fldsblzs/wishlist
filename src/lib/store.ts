import { writable, type Writable } from 'svelte/store';
import type { Wish } from './types';

export const wishes: Writable<Wish[]> = writable([]);
