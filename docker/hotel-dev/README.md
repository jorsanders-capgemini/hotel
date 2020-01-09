# Setup

Copy 'DIST.env' to '.env':    
`cp DIST.env .env`

Copy 'config/springapi/dist.application.properties' to 'config/springapi/application.properties':   
`cp config/springapi/dist.application.properties config/springapi/application.properties`

Start docker-compose:   
`docker-compose up`

Recompile Springapi code:
`docker-compose restart springapi`

Restart Angular app:   
`docker-compose restart angularwebapp`  
Note that angular automatically recompiles when changes are detected in the source code