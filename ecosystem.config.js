module.exports = {
    apps: [{
        name: 'cicd-back',
        script: './app.js',
        instances: 2, // 코어 2개 사용,  0 = 최대 코어 사용
        exec_mode: 'cluster',
        merge_logs: true, // 클러스터 모드 사용 시 각 클러스터에서 생성되는 로그를 한 파일로 합쳐준다.

        // pm2 reload 시 서비스 중단 발생할 경우 =====
        wait_ready: true, // express app 구동 완료 시 마스터 프로세스에게 보낼 ready 이벤트를 기다리게 함 (app.js 파일 app.listen 에서 process.send('ready') 이벤트 보냄)
        listen_timeout: 5000, // ready 이벤트를 기다릴 시간 (ms)

        // 요청 처리 도중 프로세스 킬 방지로 중단 발생할 경우 =====
        // SIGKILL 텀 사이에 이미 받은 요청을 기본값 1600ms에 끝낼 수 있다면 설정 필요없음.
        kill_timeout: 5000, // SIGINT -> SIGKILL 시그널 텀 설정 default: 1600(ms)
    }]

    // 참고: https://engineering.linecorp.com/ko/blog/pm2-nodejs/
}
