#!/bin/bash
#pm2 not found 가 떠서 넣어봄 ...
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

REPOSITORY=/home/ec2-user/cicd-back/
cd $REPOSITORY

#pm2 delete all
