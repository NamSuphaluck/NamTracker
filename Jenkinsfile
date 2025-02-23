pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Clone Code the project From Git"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
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
                    def myImage = docker.build('my-backend-api-image')
                }
            }
        }

        stage('Unit Tests') {
            steps {
                echo "Running tests in Docker container..."
                script {
                    // รัน unit tests ภายใน Docker container
                    docker.image('my-backend-api-image').inside {
                        // เพิ่มคำสั่งที่ใช้รัน Unit tests ภายใน container
                        sh 'npm test' // ตัวอย่างคำสั่ง (ปรับตามโปรเจกต์ของคุณ)
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
                script {
                    // Deploy Docker container หรือ Push Docker image (ถ้าต้องการ)
                    docker.image('my-backend-api-image').push('latest')  // ตัวอย่างการ Push ไปยัง Docker registry
                }
            }
        }

        stage('Deployment test') {
            steps {
                echo "Running deployment tests..."
                script {
                    // เพิ่มคำสั่งทดสอบ deployment (เช่น การทดสอบ API ที่ deploy ไปแล้ว)
                }
            }
        }
    }
}
