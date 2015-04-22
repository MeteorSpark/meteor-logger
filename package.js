Package.describe({
  name: 'meteorspark:logger',
  summary: 'Wrapper around jonnyreeves/js-logger',
  version: '0.1.0',
  git: 'https://github.com/MeteorSpark/meteor-logger'
});

both = ['server', 'client'];
server = 'server';
client = 'client';

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');

  api.add_files('js-logger/src/logger.js', both);

  api.export('Logger');
});
