module.exports = {
    apps: [{
        name: 'cicd-back',
        script: './app.js',
        instances: 2,
        exec_mode: 'cluster'
    }]
}
