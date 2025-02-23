pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // ตรวจสอบโค้ดจาก Git repository
                git 'https://github.com/NamSuphaluck/NamTracker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // สร้าง Docker image จาก Dockerfile
                    def myImage = docker.build('my-image-name')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // รัน Docker container จาก image ที่สร้างขึ้น
                    docker.image('my-image-name').inside {
                        // คำสั่งที่ต้องการให้รันใน container
                        sh 'echo "Build completed!"'
                    }
                }
            }
        }

        stage('Publish') {
            steps {
                script {
                    // ตัวอย่างการ push Docker image ไปที่ Docker registry (ถ้ามี)
                    docker.image('my-image-name').push()
                }
            }
        }
    }
}
