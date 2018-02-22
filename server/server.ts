import App from './app';

App.app.listen(process.env.PORT, () => console.log('Servidor está rodando na porta'));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução interrompida', () => process.exit(0)));
