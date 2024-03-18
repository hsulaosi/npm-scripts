#!/usr/bin/env bash

# 1. 移除旧的测试覆盖率报告目录
rimraf coverage && rimraf .nyc_output && rimraf coverage_archive

# 2. 运行 npm run test 命令，生成新的测试覆盖率报告文件
nyc --reporter=html npm run test

# 3. 根据版本号，创建测试覆盖率报告归档目录coverage_archive/$npm_package_version，将nyc工具默认存放的目录coverage/下的文件拷贝进去
mkdir -p coverage_archive/$npm_package_version 
cp -r coverage/* coverage_archive/$npm_package_version

# 4. 启动服务器并打开
npm-run-all --parallel cover:serve cover:open
