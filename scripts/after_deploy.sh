#!/bin/bash
#pm2 not found 가 떠서 넣어봄 ...
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

REPOSITORY=/home/ec2-user/cicd-back/
cd $REPOSITORY

pm2 save # 가끔 reload 횟수는 오르지만 변경된 코드가 적용 안되는 문제가 있어서 혹시나 넣어봄..
pm2 reload ecosystem.config.js
