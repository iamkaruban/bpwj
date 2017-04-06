exports.db = {
  host: process.env.EXPERTS_DB_URL || 'localhost',
  port: process.env.EXPERTS_DB_PORT || 28015,
  db: 'expertsdb',
};

exports.auth = {
  passwordSalt: process.env.EXPERTS_AUTH_PASSALT ||
    'yJCnH1OEJ7YIo2R1nkcqE1GANVykS0Mb6dZeijHjfGBQvYsRcPkVk0NGkGx4yDpr',
  sessionSecret: process.env.EXPERTS_AUTH_SESSECRET ||
    'qXX5lsVUAR6wFIxpNKPFBBE2A7kRAlcFDIYIBwPu5nskCIdKerfY0f7FHs8OJF6t',
  jwtSecret: process.env.EXPERTS_AUTH_JWTSECRET ||
    'hmwjMWyDsF31ru9N7ebJu1aWar5KzSuv7ZuyRRwVRI0SYwTa4CAGEs09lIf9FoG0',
};
