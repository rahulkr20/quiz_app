pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('rahul-dockerhub')
        DOCKER_IMAGE_NAME = 'rahulkr20/capstone:1.0'
        DOCKER_EXE_PATH = 'C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe'
        CURRENT_STAGE = ''
    }
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rahulkr20/quiz_app.git'
            }
        }
        
        // This stage is telling Jenkins to run in the frontend directory and backend directory.
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm.cmd install'
                }
                  dir('backend') {
                    bat 'npm.cmd install'
                }
            }
        }
       
        
        // This stage is telling Jenkins to build the images for the frontend.
        stage('Build Frontend and Backend Images') {
            steps {
                script {
                    bat 'docker build -t rahulkr20/capstone:1.0 frontend'
                    bat 'docker build -t rahulkr20/capstone:1.0 backend'
                }
            }
        }
        // This stage is pushing images to dockerhub.
        stage('Push Images to Hub') {
            steps {
                withDockerRegistry([ credentialsId: "rahul-dockerhub", url: "" ]) {
                    bat 'docker push rahulkr20/capstone:1.0'
                    bat 'docker push rahulkr20/capstone:1.0'
                }
            }
        }
    }
    post {
        always {
            // This block will always be executed, regardless of the build result
            bat 'docker logout'
        }
        failure {
            emailext(
                attachLog: true,
                body: '''<html>
                        <p>The build failed. Please check the Jenkins console output for details.</p>
                        <p>Build URL: ${BUILD_URL}</p>
                        </html>''',
                subject: 'Build Failure',
                to: "rahul.kumar20@st.niituniversity.in, parth.shimpi20@st.niituniversity.in, riya.goyal20@st.niituniversity.in, manvi.kumar20@st.niituniversity.in",
                mimeType: 'text/html'
            )
        }
        success {
            emailext(
                attachLog: true,
                body: 'The build was successful.',
                subject: 'Build Success',
                to: "rahul.kumar20@st.niituniversity.in, parth.shimpi20@st.niituniversity.in, riya.goyal20@st.niituniversity.in, manvi.kumar20@st.niituniversity.in",
                mimeType: 'text/html'
            )
        }
    }
}
