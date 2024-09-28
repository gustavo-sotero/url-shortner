import App from './app';

const port = Number.parseInt(process.env.PORT || '3333');
App.listen(port, () => {
	console.log(`listening on port ${port}`);
});
