import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

const bot = new Telegraf("8071285871:AAFsPIkc7JjA79vvlnbg8WzfcpxRtifcwAE");

bot.start((ctx) =>
	ctx.reply("Bem-vindo! Envie-me uma URL e eu vou encurtá-la para você."),
);

bot.on(message("text"), async (ctx) => {
	const longUrl = ctx.message.text;
	const urlPattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i",
	); // fragment locator

	if (!urlPattern.test(longUrl)) {
		return;
	}
	const response = await fetch(
		"https://encurta.gustavo-sotero.dev/api/shorten",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ longUrl }),
		},
	);

	const data = (await response.json()) as { shortUrl: string };

	ctx.reply(`https://encurta.gustavo-sotero.dev/${data.shortUrl}`);
});

bot.launch(() => {
	console.log("Bot is running");
});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
