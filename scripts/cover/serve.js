const { exec } = require("shelljs");
const npmPackageVersion = process.env.npm_package_version
const npmPackageConfigPort = process.env.npm_package_config_port

exec(`http-server coverage_archive/${npmPackageVersion} -p ${npmPackageConfigPort}`)
