#!/usr/bin/env bash

# 这里有个 sleep，是为了确保文件系统写入完成
sleep 1
open-cli http://localhost:$npm_package_config_port