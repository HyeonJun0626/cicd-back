#!/bin/bash
# pm2 not found 가 떠서 넣음
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 변수 사용법
# REPOSITORY=/home/ec2-user/cicd-back/
# cd $REPOSITORY

cd /var/www/cicd-back/

#pm2 save # 가끔 reload 횟수는 오르지만 변경된 코드가 적용 안되는 문제가 있어서 넣어봤었음 같은문제 있다면 주석풀고 시도

if ! command -v pm2 &> /dev/null
then
    npm install -g pm2
fi

if pm2 list | grep -q "cicd-back"
then
    pm2 reload ecosystem.config.js --time
else
    pm2 start ecosystem.config.js --time
fi
