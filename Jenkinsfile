pipeline{
    agent any

    stages{
        stage('Install'){
            steps{
               bat 'npm install'
            }
        }
        stage('Start'){
            steps{
               bat 'npm run start'
            }
        }
        stage('Build'){
            steps{
               bat 'npm run build'
            }
        }
    }
}
