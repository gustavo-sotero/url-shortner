import { type FormState, SignupFormSchema } from '@/lib/definitions';
import { createShortUrl } from '@/services/shortUrl';

export async function shortUrl(state: FormState, formData: FormData) {
	const validatedFields = SignupFormSchema.safeParse({
		longUrl: formData.get('longUrl')
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors
		};
	}

	const { longUrl } = validatedFields.data;

	const { success, shortUrl } = await createShortUrl(longUrl);

	return { success, shortUrl };
}
