pipeline {
    agent any
      environment{
        PROJECT_ID = 'git-jbash-123'
        CLUSTER_NAME = 'jenkins'
        LOCATION = 'us-central1'
        CREDENTIALS_ID = 'git-jbash-123'
        buildNumber = "BUILD_NUMBER"
    
    }
    stages {
        stage('Get_Codes') {
            steps {
                git credentialsId: 'github_id', url: 'https://github.com/quadrimuzammil/nodejs-app-mss.git'
            }
        }
   // stage('Build_Package') {
     //       steps {
       //         nodejs(nodeJSInstallationName: 'nodejs15') {
        //sh 'npm config fix'
       // sh 'npm install'
    //}
      //      }
       // }
    
    stage('Build docker image') {
            steps {
            sh 'docker build -t gcr.io/git-jbash-123/nodejsappmss:${BUILD_NUMBER} .'
    }
            }
        
     stage ('gcr push') {
            steps {
            // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'gcr:git-jbash-123', url: 'https://gcr.io/git-jbash-123') {
    sh 'docker push gcr.io/git-jbash-123/nodejsappmss:${BUILD_NUMBER}'
}
    }
         
     }
             stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/nodejsappmss:latest/nodejsappmss:${BUILD_NUMBER}/g' nodejsdeployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'nodejsdeployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
         
         
    }
            
        }                          