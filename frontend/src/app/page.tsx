'use client';

import { shortUrl } from '@/actions/shortUrl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type JSX, type SVGProps, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export default function Home() {
	const [state, action] = useFormState(shortUrl, undefined);
	const [isCopied, setIsCopied] = useState(false);
	const { pending } = useFormStatus();

	const origin =
		typeof window !== 'undefined' && window.location.origin
			? window.location.origin
			: '';

	async function copyToClipboard() {
		try {
			if (state?.shortUrl) {
				await navigator.clipboard.writeText(`${origin}/${state.shortUrl}`);
			}
			setIsCopied(true);
		} catch (error) {
			console.error('Falha ao copiar: ', error);
		}
	}

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container grid items-center gap-6 px-4 md:px-6">
				<div className="mx-auto max-w-md space-y-4 text-center">
					<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Encurte Seus URLs
					</h1>
					<p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Simplifique URLs longas e complexas com nosso encurtador de URL
						fácil de usar.
					</p>
				</div>
				<div className="mx-auto max-w-md">
					<form action={action}>
						<div className="flex w-full items-center gap-2">
							<Input
								type="url"
								placeholder="Digite uma URL longa"
								className="flex-1"
								id="longUrl"
								name="longUrl"
								disabled={pending || state?.success}
							/>
							<Button disabled={pending || state?.success} type="submit">
								Encurtar
							</Button>
						</div>
						{state?.errors ? (
							<p className="text-red-500">{state?.errors?.longUrl}</p>
						) : (
							''
						)}
					</form>
					{state?.success && (
						<div className="mt-4 flex items-center gap-2">
							<Input
								type="text"
								value={`${origin}/${state.shortUrl}`} // Use the shortened URL here
								readOnly
								className="flex-1 font-mono"
							/>
							<Button variant="outline" onClick={copyToClipboard}>
								<CopyIcon className="mr-2 h-4 w-4" />
								{isCopied ? 'Copiado!' : 'Copiar'}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Copy Icon</title>
			<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		</svg>
	);
}
