pipeline{
    agent any

    stages{
        stage('Install'){
            steps{
               sh 'npm install'
            }
        }
        stage('Start'){
            steps{
               sh 'npm run start'
            }
        }
        stage('Build'){
            steps{
               sh 'npm run build'
            }
        }
    }
}
