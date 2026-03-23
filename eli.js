// Microsoft Windows [Versión 10.0.26200.8037]
// (c) Microsoft Corporation. Todos los derechos reservados.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>code .

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install
// npm warn old lockfile
// npm warn old lockfile The package-lock.json file was created with an old version of npm,
// npm warn old lockfile so supplemental metadata must be fetched from the registry.
// npm warn old lockfile
// npm warn old lockfile This is a one-time fix-up, please be patient...
// npm warn old lockfile
// npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
// npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
// npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
// npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
// npm warn deprecated supertest@6.3.4: Please upgrade to supertest v7.1.3+, see release notes at https://github.com/forwardemail/supertest/releases/tag/v7.1.3 - maintenance is supported by Forward Email @ https://forwardemail.net
// npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
// npm warn deprecated superagent@8.1.2: Please upgrade to superagent v10.2.2+, see release notes at https://github.com/forwardemail/superagent/releases/tag/v10.2.2 - maintenance is supported by Forward Email @ https://forwardemail.net
// npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

// added 382 packages, and audited 436 packages in 37s

// 64 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npx eslint --init
// You can also run this command directly using 'npm init @eslint/config'.

// > fast-api-dev@0.0.0 npx
// > create-config

// @eslint/create-config: v1.11.0

// √ What do you want to lint? · javascript
// √ How would you like to use ESLint? · problems
// √ What type of modules does your project use? · esm
// √ Which framework does your project use? · react
// √ Does your project use TypeScript? · No / Yes
// √ Where does your code run? · browser
// i The config that you've selected requires the following dependencies:

// eslint, @eslint/js, globals, eslint-plugin-react
// √ Would you like to install them now? · No / Yes
// √ Which package manager do you want to use? · npm
// ☕️Installing...
// npm warn ERESOLVE overriding peer dependency
// npm warn While resolving: fast-api-dev@0.0.0
// npm warn Found: eslint@8.57.1
// npm warn node_modules/eslint
// npm warn   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm warn   node_modules/@eslint-community/eslint-utils
// npm warn     @eslint-community/eslint-utils@"^4.2.0" from eslint@8.57.1
// npm warn   1 more (the root project)
// npm warn
// npm warn Could not resolve dependency:
// npm warn peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm warn node_modules/@eslint/js
// npm warn   dev @eslint/js@"*" from the root project

// added 94 packages, changed 2 packages, and audited 530 packages in 11s

// 133 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.
// × A config file was generated, but the config file itself may not follow your linting rules.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: @eslint/js@10.0.1
// npm error Found: eslint@8.57.1
// npm error node_modules/eslint
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.2.0" from eslint@8.57.1
// npm error   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error   node_modules/eslint-plugin-react
// npm error     dev eslint-plugin-react@"^7.37.5" from the root project
// npm error   1 more (the root project)
// npm error
// npm error Could not resolve dependency:
// npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error node_modules/@eslint/js
// npm error   dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_43_15_889Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_43_15_889Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev --legacy-peer-deps

// added 1 package, and audited 531 packages in 2s

// 134 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: @eslint/js@10.0.1
// npm error Found: eslint@8.57.1
// npm error node_modules/eslint
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.2.0" from eslint@8.57.1
// npm error   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error   node_modules/eslint-plugin-react
// npm error     dev eslint-plugin-react@"^7.37.5" from the root project
// npm error   1 more (the root project)
// npm error
// npm error Could not resolve dependency:
// npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error node_modules/@eslint/js
// npm error   dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_49_46_149Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_49_46_149Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev --legacy-peer-deps

// up to date, audited 531 packages in 2s

// 134 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install eslint@latest --save-dev
// npm warn ERESOLVE overriding peer dependency
// npm warn While resolving: fast-api-dev@0.0.0
// npm warn Found: eslint@8.57.1
// npm warn node_modules/eslint
// npm warn   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm warn   node_modules/@eslint-community/eslint-utils
// npm warn     @eslint-community/eslint-utils@"^4.2.0" from eslint@8.57.1
// npm warn   2 more (eslint-plugin-react, the root project)
// npm warn
// npm warn Could not resolve dependency:
// npm warn peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm warn node_modules/eslint-plugin-react
// npm warn   dev eslint-plugin-react@"^7.37.5" from the root project

// added 21 packages, removed 30 packages, changed 5 packages, and audited 522 packages in 7s

// 130 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: eslint-plugin-react@7.37.5
// npm error Found: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.8.0" from eslint@10.1.0
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error   1 more (the root project)
// npm error
// npm error Could not resolve dependency:
// npm error peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error node_modules/eslint-plugin-react
// npm error   dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@9.39.4
// npm error node_modules/eslint
// npm error   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error   node_modules/eslint-plugin-react
// npm error     dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_50_26_488Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_50_26_488Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>rm -rf node_modules
// "rm" no se reconoce como un comando interno o externo,
// programa o archivo por lotes ejecutable.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>rm package-lock.json
// "rm" no se reconoce como un comando interno o externo,
// programa o archivo por lotes ejecutable.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: eslint-plugin-react@7.37.5
// npm error Found: eslint@10.1.0
// npm error node_modules/eslint
// npm error   dev eslint@"^10.1.0" from the root project
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.8.0" from eslint@10.1.0
// npm error   1 more (@eslint/js)
// npm error
// npm error Could not resolve dependency:
// npm error peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error node_modules/eslint-plugin-react
// npm error   dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@9.39.4
// npm error node_modules/eslint
// npm error   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error   node_modules/eslint-plugin-react
// npm error     dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_50_43_522Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_50_43_522Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>rd /s /q node_modules

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>del package-lock.json

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install
// npm error code ERESOLVE
// npm error ERESOLVE unable to resolve dependency tree
// npm error
// npm error While resolving: fast-api-dev@0.0.0
// npm error Found: eslint@10.1.0
// npm error node_modules/eslint
// npm error   dev eslint@"^10.1.0" from the root project
// npm error
// npm error Could not resolve dependency:
// npm error peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error node_modules/eslint-plugin-react
// npm error   dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_51_05_324Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_51_05_324Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>rd /s /q node_modules
// El sistema no puede encontrar el archivo especificado.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>del package-lock.json
// No se pudo encontrar C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\package-lock.json

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>rd /s /q node_modules
// El sistema no puede encontrar el archivo especificado.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install eslint@9 --save-dev
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: @eslint/js@10.0.1
// npm error Found: eslint@9.39.4
// npm error node_modules/eslint
// npm error   dev eslint@"9" from the root project
// npm error   peer eslint@"^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" from eslint-plugin-react@7.37.5
// npm error   node_modules/eslint-plugin-react
// npm error     dev eslint-plugin-react@"^7.37.5" from the root project
// npm error
// npm error Could not resolve dependency:
// npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error node_modules/@eslint/js
// npm error   dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_53_59_244Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_53_59_244Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm unistall

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm uninstall eslint-plugin-react
// npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
// npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
// npm warn deprecated supertest@6.3.4: Please upgrade to supertest v7.1.3+, see release notes at https://github.com/forwardemail/supertest/releases/tag/v7.1.3 - maintenance is supported by Forward Email @ https://forwardemail.net
// npm warn deprecated superagent@8.1.2: Please upgrade to superagent v10.2.2+, see release notes at https://github.com/forwardemail/superagent/releases/tag/v10.2.2 - maintenance is supported by Forward Email @ https://forwardemail.net

// added 428 packages, and audited 429 packages in 17s

// 63 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install eslint@9 --save-dev
// npm warn ERESOLVE overriding peer dependency
// npm warn While resolving: fast-api-dev@0.0.0
// npm warn Found: eslint@10.1.0
// npm warn node_modules/eslint
// npm warn   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm warn   node_modules/@eslint-community/eslint-utils
// npm warn     @eslint-community/eslint-utils@"^4.8.0" from eslint@10.1.0
// npm warn   2 more (@eslint/js, the root project)
// npm warn
// npm warn Could not resolve dependency:
// npm warn peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm warn node_modules/@eslint/js
// npm warn   dev @eslint/js@"^10.0.1" from the root project

// added 11 packages, removed 7 packages, changed 12 packages, and audited 433 packages in 4s

// 66 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: @eslint/js@10.0.1
// npm error Found: eslint@9.39.4
// npm error node_modules/eslint
// npm error   dev eslint@"^9.39.4" from the root project
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.8.0" from eslint@9.39.4
// npm error
// npm error Could not resolve dependency:
// npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error node_modules/@eslint/js
// npm error   dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_56_10_692Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_56_10_692Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npx eslint --init
// You can also run this command directly using 'npm init @eslint/config@latest'.
// Need to install the following packages:
// @eslint/create-config@1.11.0
// Ok to proceed? (y) y

// > fast-api-dev@0.0.0 npx
// > create-config

// @eslint/create-config: v1.11.0

// √ What do you want to lint? · javascript
// √ How would you like to use ESLint? · problems
// √ What type of modules does your project use? · esm
// √ Which framework does your project use? · react
// √ Does your project use TypeScript? · No / Yes
// √ Where does your code run? · browser
// i The config that you've selected requires the following dependencies:

// eslint, @eslint/js, globals, eslint-plugin-react
// √ Would you like to install them now? · No / Yes
// √ Successfully created C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\eslint.config.mjs file.
// ‼ You will need to install the dependencies yourself.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev
// npm error code ERESOLVE
// npm error ERESOLVE could not resolve
// npm error
// npm error While resolving: @eslint/js@10.0.1
// npm error Found: eslint@9.39.4
// npm error node_modules/eslint
// npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm error   node_modules/@eslint-community/eslint-utils
// npm error     @eslint-community/eslint-utils@"^4.8.0" from eslint@9.39.4
// npm error   dev eslint@"^9.39.4" from the root project
// npm error
// npm error Could not resolve dependency:
// npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error node_modules/@eslint/js
// npm error   dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Conflicting peer dependency: eslint@10.1.0
// npm error node_modules/eslint
// npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm error   node_modules/@eslint/js
// npm error     dev @eslint/js@"^10.0.1" from the root project
// npm error
// npm error Fix the upstream dependency conflict, or retry
// npm error this command with --force or --legacy-peer-deps
// npm error to accept an incorrect (and potentially broken) dependency resolution.
// npm error
// npm error
// npm error For a full report see:
// npm error C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_57_39_002Z-eresolve-report.txt
// npm error A complete log of this run can be found in: C:\Users\Elizabeth\AppData\Local\npm-cache\_logs\2026-03-23T05_57_39_002Z-debug-0.log

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm uninstall @eslint/js
// npm warn ERESOLVE overriding peer dependency
// npm warn While resolving: @eslint/js@10.0.1
// npm warn Found: eslint@9.39.4
// npm warn node_modules/eslint
// npm warn   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.9.1
// npm warn   node_modules/@eslint-community/eslint-utils
// npm warn     @eslint-community/eslint-utils@"^4.8.0" from eslint@9.39.4
// npm warn   1 more (the root project)
// npm warn
// npm warn Could not resolve dependency:
// npm warn peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm warn node_modules/@eslint/js
// npm warn
// npm warn Conflicting peer dependency: eslint@10.1.0
// npm warn node_modules/eslint
// npm warn   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
// npm warn   node_modules/@eslint/js

// removed 1 package, and audited 432 packages in 2s

// 65 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install @eslint/js@9 globals eslint-plugin-react --save-dev

// added 92 packages, removed 1 package, and audited 523 packages in 18s

// 132 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install prettier --save-dev

// up to date, audited 523 packages in 2s

// 132 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run lint

// > fast-api-dev@0.0.0 lint
// > eslint .

// Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\app.js
//    1:15  error  'require' is not defined    no-undef
//    2:12  error  'require' is not defined    no-undef
//    3:20  error  'require' is not defined    no-undef
//    4:14  error  'require' is not defined    no-undef
//    6:19  error  'require' is not defined    no-undef
//    7:19  error  'require' is not defined    no-undef
//    8:19  error  'require' is not defined    no-undef
//   16:34  error  '__dirname' is not defined  no-undef
//   22:1   error  'module' is not defined     no-undef

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\routes\index.js
//   1:15  error  'require' is not defined  no-undef
//   5:50  error  'process' is not defined  no-undef
//   8:1   error  'module' is not defined   no-undef

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\routes\items.js
//    1:15  error  'require' is not defined  no-undef
//   13:1   error  'module' is not defined   no-undef

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\routes\users.js
//   1:15  error  'require' is not defined          no-undef
//   5:36  error  'next' is defined but never used  no-unused-vars
//   9:1   error  'module' is not defined           no-undef

// ✖ 17 problems (17 errors, 0 warnings)


// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run lint

// > fast-api-dev@0.0.0 lint
// > eslint .


// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev\routes\users.js
//   5:36  error  'next' is defined but never used  no-unused-vars

// ✖ 1 problem (1 error, 0 warnings)


// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run lint

// > fast-api-dev@0.0.0 lint
// > eslint .


// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run start

// > fast-api-dev@0.0.0 start
// > node ./bin/www

// ¿Desea terminar el trabajo por lotes (S/N)? s

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run format

// > fast-api-dev@0.0.0 format
// > prettier --write .

// .prettierrc 49ms
// app.js 20ms
// bin/www 23ms
// eslint.config.mjs 6ms
// package-lock.json 105ms (unchanged)
// package.json 2ms
// public/index.html 81ms
// public/stylesheets/style.css 34ms
// routes/index.js 11ms
// routes/items.js 7ms
// routes/users.js 5ms

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm run start

// > fast-api-dev@0.0.0 start
// > node ./bin/www

// GET / 200 18.598 ms - 192
// GET /stylesheets/style.css 200 2.716 ms - 127
// ^C¿Desea terminar el trabajo por lotes (S/N)? s

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm install jest supertest --save-dev

// up to date, audited 523 packages in 2s

// 132 packages are looking for funding
//   run `npm fund` for details

// 9 vulnerabilities (5 low, 4 high)

// To address issues that do not require attention, run:
//   npm audit fix

// To address all issues, run:
//   npm audit fix --force

// Run `npm audit` for details.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>npm test

// > fast-api-dev@0.0.0 test
// > jest --verbose

// GET /health 200 4.403 ms - 34
// GET /items 200 1.430 ms - 72
// GET /items 200 0.702 ms - 72
// GET /ruta-inexistente 404 1.299 ms - 155
//  PASS  tests/app.test.js
//   Suite de Pruebas de Calidad de Software
//     Pruebas Unitarias - Lógica de Inventario
//       √ Debe calcular correctamente el valor total (10 * 5 = 50) (3 ms)
//       √ Debe retornar 0 si se ingresan valores negativos (1 ms)
//       √ Debe retornar 0 si el stock es negativo
//       √ Debe retornar 0 si precio y stock son 0
//     Pruebas de Integración - API Endpoints
//       √ GET /health - Debe responder con status 200 y JSON correcto (57 ms)
//       √ GET /items - Debe validar la estructura del inventario (10 ms)
//       √ GET /items - La lista no debe estar vacía (6 ms)
//       √ Ruta inexistente debe retornar 404 (9 ms)

// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
// Snapshots:   0 total
// Time:        1.333 s
// Ran all test suites.

// C:\Users\Elizabeth\Desktop\fast-api-dev\fast-api-dev\fast-api-dev>