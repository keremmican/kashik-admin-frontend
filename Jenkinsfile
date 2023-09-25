def buildNumberText() {
    def buildNumberText = ""
    if(env.BRANCH_NAME == 'master'){
        buildNumberText = "1.${env.BUILD_NUMBER}"
    }
	return buildNumberText
}

pipeline{

	agent any

  	tools {nodejs "NodeJS"}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('keremmican-dockerhub')
	}

	stages {

		stage('Npm Install') {

			steps {
				echo 'Packaging the app into jars with maven'
				sh "npm install"
			}
		}

		stage('Npm Build') {

			steps {
				sh "npm run build"
			}
		}

		stage('Docker Build') {
			when {
                anyOf {
                    branch 'master'
                }
            }
            steps {
                script {
                  if(env.BRANCH_NAME == 'master'){
                        sh "docker build --build-arg APP_ENV=prod -t 'keremmican/kashik-admin-frontend:" + buildNumberText()  + "' . "
                    }
                }
            }
		}

		stage('Login') {
			when {
                anyOf {
                    branch 'master'
                }
            }
			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {
			when {
                anyOf {
                    branch 'master'
                }
            }
			steps {
				sh "docker push keremmican/kashik-admin-frontend:" + buildNumberText()
			}
		}

		stage('Kube Deploy') {
            steps {
                script {
                    if(env.BRANCH_NAME == 'master'){
                        sh "sed -i 's/tag/" +  buildNumberText() + "/g' ./k8s/admin-deployment.yml"
                        sh "kubectl apply -f ./k8s/"
                    }
                }
            }
		}
	}

	post {
		always {
			sh 'docker logout'
		    sh "docker image prune -af"
            sh "docker builder prune -af"
		}
	}

}
