
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
        seed: params.slug,
    }
};