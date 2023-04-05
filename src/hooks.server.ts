import type { Handle } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Database } from './types/supabase';

export const handle: Handle = async ({ event, resolve }) => {
	const supabaseClient = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_KEY,
		event
	});

	event.locals.supabase = supabaseClient;

	event.locals.getSession = async () => {
		const { data } = await event.locals.supabase.auth.getSession();

		return data.session;
	};

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => name === 'content-range'
	});

	return response;
};
