#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

REPOSITORY=/home/ec2-user/cicd-back/
cd $REPOSITORY

pm2 reload ecosystem.config.js
#npm start
