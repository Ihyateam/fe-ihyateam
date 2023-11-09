import type { LanguageOptions } from '$lib/types';
import {writable } from 'svelte/store';

export const lang = writable<LanguageOptions>('ar');

export const isLangDialogOpen = writable<boolean>(false);
