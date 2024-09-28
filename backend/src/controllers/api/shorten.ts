import type { Request, Response } from "express";
import { prisma } from "../../models/prisma";

export const createShortUrl = async (req: Request, res: Response) => {
	const { longUrl } = req.body;
	if (!longUrl) {
		return res.status(400).json({ message: "Missing longUrl" });
	}
	if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
		return res.status(400).json({ message: "Invalid URL" });
	}

	const addressIp =
		(req.headers["x-forwarded-for"]?.toString() || req.socket.remoteAddress) ??
		"";
	const userAgent = req.headers["user-agent"] ?? "";
	let shortUrl = Math.random().toString(36).substring(2, 15);

	let urlExists: {
		id: number;
		createdAt: Date;
		expiration: Date | null;
		longUrl: string;
		shortUrl: string;
		userAgent: string;
		addressIp: string;
		userId: number | null;
	} | null;
	do {
		urlExists = await prisma.url.findFirst({
			where: {
				shortUrl,
			},
		});
		if (urlExists) {
			shortUrl = Math.random().toString(36).substring(2, 15);
		}
	} while (urlExists);

	try {
		const newUrl = await prisma.url.create({
			data: {
				longUrl,
				addressIp,
				userAgent,
				shortUrl,
			},
		});
		res.status(201).json(newUrl);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const getShortUrl = async (req: Request, res: Response) => {
	const { shortUrl } = req.params;
	const url = await prisma.url.findFirst({
		where: {
			shortUrl,
		},
	});
	if (!url) {
		return res.status(404).json({ message: "URL not found" });
	}
	res.status(200).json(url);
};
