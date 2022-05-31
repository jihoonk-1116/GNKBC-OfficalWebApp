# GNKBC-WebApp Development Log
  <br>
  Full-Stack development for launching Grace New York Church's Offical Web application.
  
# Requirements 

  - Cost efficient
  - Web App that is able to easily update church's information without a developer
  - Responsive Web App
  - User & Post Management
  - Design Java class following MVC (Model,View,Controller) pattern and OOP rules
  - RDB with JPA, Spring Data
  

# Stack
  ## Frontend
   * Thymeleaf - SSR with Spring framework
   * Jquery
   * Bootstrap
   * Quiljs 
  ## Backend
   * Java Spring framework
   * JPA
   * RDB - MariaDB
   * Spring Data
   * Spring Security
  ## Tools
   * AWS
     -  AWS Lambda, EC2, RDS, S3
   * Testing
     - Postman, H2, Junit
   * IDE
     - VScode, InteliJ
   * Build & Deployment tools
     - Gradle, Docker, Jenkins, Git
   * In Spring
     - Gson, Lombok, Google Auth API, Slf4j, JSON
  

# Step 1: Static web page 
![image](https://user-images.githubusercontent.com/76544061/171215599-6e51167f-0e52-4079-bc59-a82704be9720.png)

  ## TODO & Completion
   - Selected Frontend template that is using Bootstrap, Jquery
   - Integration with Thymeleaf in order to use the pre-built template with Spring framework
   - Communication with the design team in GNKBC to optimize and improve website's view
# Step 2: Admin Application
![image](https://user-images.githubusercontent.com/76544061/171186187-626a1689-3d64-442b-92d9-f8075dfcc1b9.png)

  ## TODO & Completion
   - Admin service for someone who is not developer
   - JSON storage for storing static string data in order to keep static data and reflect data modification without a Relational Data Base
   - GSON libary to manage the JSON storage
   - Postman to test admin service's functionality
   - Thymeleaf and JavaScript to deliver a changed string data to front view from the Static data repository
   - Keep MVC & OOP pattern for maintenance and prevent entire system faliure caused by a single point of faliure
   - Stricted follow the dependent flow: Controller - Service - Repository 
  ## Development Note
   - @Qualifier : Same Interface injection, but different usage of its implementation
   - They are about bean's life cycle : @PostConstruct - after creating bean , @PreDestroy - before destory bean  
     -> The method must not have parameter 
   - GSON : libraries to handle JSON data in Java
  ## Static String Data Management
    - Load Static String from JSON storage 
   ![image](https://user-images.githubusercontent.com/76544061/171183106-db99bde6-173c-4924-9688-f8e418b7012b.png)
    
    - uploadString(key, input) - Change static string data using key(tag), and user input 
    - getContentMap()
   ![image](https://user-images.githubusercontent.com/76544061/171183568-890eff6c-449a-44fb-b698-73fbd8691d85.png)
   
    - when terminating the static repository,
   ![image](https://user-images.githubusercontent.com/76544061/171184132-7d8e6579-ccbc-4f11-a9a9-bcc0651f1283.png)

  ## Static Image File Management
    - save() 
  ![image](https://user-images.githubusercontent.com/76544061/171187108-184905b0-eb73-48e8-a18c-a34e51ed53e4.png)

  
  
# Step 3: Authentication via Google and Configuration Spring security
ref: https://www.codejava.net/frameworks/spring-boot/oauth2-login-with-google-example 

      - permit all of static assets and public infomation
      - request authentication when an user's trying to access admin application
  ![image](https://user-images.githubusercontent.com/76544061/171188129-ba7e4800-b7a3-4bf2-92e7-c70453cbde8c.png)
  
      - if success to get authentication from Google,
      - but it's not authorized admin -> login fail
      - it's admin -> set a new Session , redirect admin home 
  ![image](https://user-images.githubusercontent.com/76544061/171188673-3f2daf4f-4430-4233-b2e1-3cead42cd3ae.png)
      
      - then, every admin related request is checked by AuthInterceptor
      
   ![image](https://user-images.githubusercontent.com/76544061/171189296-ba24b5e3-3295-4132-8154-2d31e7ba3584.png)


# Step 4: Integration post writer with a rich text editor at frontend & jQuery AJAX
      - Import rich text editor 
      - <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet" />
      - <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
   ![image](https://user-images.githubusercontent.com/76544061/171190884-a09c6472-f005-4993-ba7b-34cb4b3eabe7.png)
   ![image](https://user-images.githubusercontent.com/76544061/171190807-e7bbe3a8-82fa-4520-9d42-b0dbbaf7ae07.png)
   
      - AJAX using JSON format to bind post Entity object 
   ![image](https://user-images.githubusercontent.com/76544061/171191430-fb00be34-960a-464c-9441-0ad37bf3d33b.png)


# Step 5: Implementation entity class using JPA and testing with H2 database
    - Post Entity
   ![image](https://user-images.githubusercontent.com/76544061/171192654-f9cc6d7b-eb0b-465a-b382-37f2ec1751da.png)
    
    - Member Entity
   ![image](https://user-images.githubusercontent.com/76544061/171192838-251b2cec-c37a-4fcd-90d8-45dd04093892.png)


# Step 6: Member and Post CRUD operators using JPA 
   * REF: Persistence Context Flow
   * <img width="400" alt="Screen Shot 2022-05-23 at 2 05 17 PM" src="https://user-images.githubusercontent.com/76544061/169909971-7d2814d5-b3cb-4231-95a1-6cb3b3cd7879.png">

    - TDD development - click the below images to see the detail code
    - Test post service
   <a href="https://github.com/jihoonk-1116/GNKBC-OfficalWebApp/edit/main/GNKBC/test/AdminPostServiceTest.java">![image](https://user-images.githubusercontent.com/76544061/171200905-edfd9be3-26b1-4052-b78d-9a246a19d7e8.png)</a>
   
    - Test user service
  <a href="https://github.com/jihoonk-1116/GNKBC-OfficalWebApp/blob/main/GNKBC/test/AdminUserServiceTest.java">![image](https://user-images.githubusercontent.com/76544061/171201114-bcc42958-310f-4d1b-b47f-27a4f81d712b.png)</a>


# Step 7: Development Contact us page using AWS Lambda

    - In Nodejs, used AWS Lambda, SES and Severless framework
    - serverless.yml to utilze Serverless Framework that provides us with CI&CD
   ![image](https://user-images.githubusercontent.com/76544061/171211753-b5b079cb-290d-4d30-9d6f-62ed51fcd439.png)

    * Flow
   ![image](https://user-images.githubusercontent.com/76544061/171209062-944bc41b-aab5-44d9-aa0a-7f5a164e0635.png)
    
    - In handler.js , 
    - const AWS = require("aws-sdk")
      const ses = new AWS.SES();
    - await ses.sendEmail(params).promise();
    
   * Test - Postman : status code 200
   <img width="600" alt="KakaoTalk_20220531_112441997" src="https://user-images.githubusercontent.com/76544061/171211052-9cfd9428-fef6-49de-967b-b77da9e80d14.png">
  
  
  <img width="300" alt="KakaoTalk_20220531_112547240" src="https://user-images.githubusercontent.com/76544061/171212327-47327229-6d77-4951-a56c-45d37ba736a2.jpg">
 

    
# Step 8: Build Docker image and configure CI environment

 ### Setting up JenKins on EC2
  
    1. Install Java 8 
        - sudo yum install java-1.8.0-openjdk
        - java -version
        - alternatives --config java
        
    2. Add Jenkins directory
        - sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo 
        trusted package...
        - sudo rpm --import http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key
    3. Install
        - sudo yum install jenkins 
    4. Start 
       - sudo systemctl start jenkins
       - sudo systemctl status jenkins.service
- ![Screen Shot 2022-05-30 at 3 35 12 PM](https://user-images.githubusercontent.com/76544061/171051370-3852a002-bf59-464c-ba62-720263cc5961.png)
  
  ### Add Inbound Rule for Jenkins, port 8080
     
      
     ![Screen Shot 2022-05-30 at 3 40 52 PM](https://user-images.githubusercontent.com/76544061/171051897-ea8de72c-d703-41c1-9d92-077f2e2c889e.png)
  
      - then, get password from :  sudo cat /var/lib/jenkins/secrets/initialAdminPassword

   ### Docker commands 
      - sudo yum install docker
      - sudo systemctl start docker
      - sudo docker pull [id]/[repo name]
      - sudo docker run -p 8080:8080 [id]/[name]
      - DockerFile
     <img width="333" alt="Screen Shot 2022-05-31 at 9 08 07 AM" src="https://user-images.githubusercontent.com/76544061/171180909-7de69295-e1a6-4d46-8125-40b034e980dc.png">

   ### Continue on Jenkins 
      * Gradle Plugin , Post build task plugin
      * new item -> Check github project
      * github credential - personal access token by Git
      * Chekc GitHub hook trigger for GITScm polling - to make a trigger by Github webhook
      * Add building task using Execute Shell
     <img width="356" alt="Screen Shot 2022-05-30 at 8 17 14 PM" src="https://user-images.githubusercontent.com/76544061/171070401-cc6b04b7-e668-43a2-8a8b-d7345a905733.png">
       
       * Git webhook - url : http://[ec2 IP]:8080/github-webhook/
     <img width="537" alt="Screen Shot 2022-05-30 at 8 19 23 PM" src="https://user-images.githubusercontent.com/76544061/171070773-46d53587-ff06-47f2-a5f5-b5d7a6bfc6df.png">

# Step 9: Integration with AWS and Deployment 
     - Integration Spring with AWS RDS 
     - * ddl-auto : create is only for developing environment !
<img width="442" alt="KakaoTalk_20220531_102205727" src="https://user-images.githubusercontent.com/76544061/171202609-e2d720f6-0d9c-4bb7-aaf8-ff528b06fdba.png">
     
     - Check if SQL logs are created 
     
  <img width="959" alt="KakaoTalk_20220531_105321791" src="https://user-images.githubusercontent.com/76544061/171204124-0a7b8188-09be-4352-af38-3cbb85958218.png">
     

    - Working on it...
