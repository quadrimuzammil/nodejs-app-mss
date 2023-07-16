const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://34.28.20.207:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample -webhook',
	    'sonar.projectKey':'nodejs-02',
	    'sonar.login': 'squ_9ab4e928d98e48e5e14cd1064dc96c9cf6ce706d',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
