const { rm, cp, mkdir, exec } = require("shelljs");
const chalk = require("chalk");
const npmPackageVersion = process.env.npm_package_version

console.log(chalk.green('1. remove old coverage reports...'));
rm('-rf', '.nyc_output');
rm('-rf', 'coverage');
rm('-rf', 'coverage_archive');

console.log(chalk.green('2. run test and collect new coverage...'));
exec('nyc --reporter=html npm run test');

console.log(chalk.green('3. archive coverage report by version...'));
mkdir('-p', `coverage_archive/${npmPackageVersion}`);
cp('-r', 'coverage/*', `coverage_archive/${npmPackageVersion}`);

console.log(chalk.green('4. open coverage report for preview...'));
exec('npm-run-all --parallel cover-win:serve cover-win:open');
