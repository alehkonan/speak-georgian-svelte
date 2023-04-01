import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase/client';

export const ssr = false;
export const prerender = false;

export const load: PageLoad = async () => {
	const response = await supabase.from('words').select();

	if (response.error) throw error(response.status, response.error.message);

	return {
		words: response.data
	};
};
