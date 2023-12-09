pipeline {
    // Telling Jenkins to run the pipeline on any available agent. 
    agent any
    options {
        skipDefaultCheckout(true)
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
        stage('Unit Testing') {
            steps {
                dir('backend') {
                    bat 'npm.cmd test'
                }
            }
        }
        
        // This stage is telling Jenkins to build the images for the frontend.
        stage('Build Frontend and Backend Images') {
            steps {
                script {
                    bat 'docker build -t rahulkr20/Quiz:frontend'
                    bat 'docker build -t rahulkr20/Quiz:backend'
                }
            }
        }
        // This stage is pushing images to dockerhub.
        stage('Push Images to Hub') {
            steps {
                withDockerRegistry([ credentialsId: "rahul-dockerhub", url: "https://index.docker.io/v1/" ]) {
                    bat 'docker push rahulkr20/Quiz:frontend'
                    bat 'docker push rahulkr20/Quiz:backend'
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
