pipeline {
    agent any
      environment{
        //  PROJECT_ID = 'devops-374009'
        //CLUSTER_NAME = 'two-wheeler'
        //LOCATION = 'us-central1'
        //CREDENTIALS_ID = 'devops-374009'
        buildNumber = "BUILD_NUMBER"
    
    }
    stages {
        stage('Get_Codes') {
            steps {
                git credentialsId: 'github_id', url: 'https://github.com/quadrimuzammil/nodejs-app-mss.git'
            }
        }
    stage('Build_Package') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs19') {
        sh 'npm install'
    }
            }
        }
    
    stage('Build docker image') {
            steps {
            sh 'docker build -t gcr.io/git-jbash-123/nodejsappmss:${BUILD_NUMBER} .'
    }
            }
        
     stage ('gcr push') {
            steps {
            // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'gcr:git-jbash-123', url: 'https://gcr.io') {
    sh 'docker push gcr.io/git-jbash-123/nodejsappmss:${BUILD_NUMBER}'
}
    }
         
     }
         
         
         
    }
            
        }                          