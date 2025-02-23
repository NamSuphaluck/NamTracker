pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Clone Code the project From Git"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    userRemoteConfigs: [[
                        credentialsId: 'Boblee',
                        url: 'https://github.com/NamSuphaluck/NamTracker.git'
                    ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    // สร้าง Docker image โดยใช้ Dockerfile ที่อยู่ใน repository
                    bat "docker build -t dockertest ."
                    
                    // รัน Docker container จาก image ที่สร้าง
                    bat "docker run -d --name my-container -p 8080:80 dockertest:latest"
                }
            }
        }

        stage('Unit Tests') {
            steps {
                echo "Running tests..."
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
            }
        }

        stage('Deployment test') {
            steps {
                echo "Running tests..."
            }
        }
    }
}
