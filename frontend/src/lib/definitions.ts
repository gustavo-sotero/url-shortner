import { z } from 'zod';

export const SignupFormSchema = z.object({
	longUrl: z
		.string()
		.url({ message: 'Por favor insira uma URL valida.' })
		.trim()
});
export type FormState =
	| {
			errors?: {
				longUrl?: string[];
			};
			message?: string;
			success?: boolean;
			longUrl?: string;
			shortUrl?: string;
	  }
	| {
			success?: boolean;
			longUrl?: string;
			shortUrl?: string;
	  }
	| undefined;
