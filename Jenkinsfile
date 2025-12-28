pipeline {
    agent any

    environment {
        IMAGE_NAME = "pranjali-portfolio"
        CONTAINER_NAME = "portfolio-container"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pranjali1210/pranjali-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:5000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }

    post {
        success {
            echo "Portfolio deployed successfully!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}
