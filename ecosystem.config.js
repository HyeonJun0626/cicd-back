module.exports = {
    apps: [{
        name: 'cicd-back',
        script: './app.js',
        instances: 0,
        exec_mode: 'cluster'
    }]
}
