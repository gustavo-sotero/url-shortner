import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 text-center sm:px-6 lg:px-8">
			<h1 className="text-9xl font-extrabold tracking-tighter text-primary sm:text-[15rem]">
				404
			</h1>
			<div className="mt-8 space-y-4">
				<p className="text-2xl font-semibold text-foreground sm:text-4xl">
					Pagina não encontrada
				</p>
				<p className="max-w-md text-muted-foreground sm:text-lg">
					A página que você está procurando não pôde ser encontrada. Por favor,
					verifique o URL ou volte para a página inicial.
				</p>
				<Link
					href="/"
					className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Voltar para o início
				</Link>
			</div>
		</div>
	);
}
