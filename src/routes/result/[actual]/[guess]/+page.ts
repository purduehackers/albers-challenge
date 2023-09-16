import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
        actual: params.actual,
        guess: params.guess,
    }
};