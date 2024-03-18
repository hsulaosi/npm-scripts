const { exec } = require("shelljs");
const npmPackageConfigPort = process.env.npm_package_config_port

exec("sleep 1");
exec(`open-cli http://localhost:${npmPackageConfigPort}`);
