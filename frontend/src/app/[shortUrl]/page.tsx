import { getLongUrl } from '@/services/shortUrl';
import { notFound, redirect } from 'next/navigation';

export default async function Page({
	params
}: {
	params: { shortUrl: string };
}) {
	const data = await getLongUrl(params.shortUrl);
	if (!data.success) {
		return notFound();
	}
	return redirect(data.longUrl);
}
