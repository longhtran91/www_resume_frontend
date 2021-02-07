# www_resume_frontend
Website: https://resume.lhtran.com/
API URL: https://api.lhtran.com/wwwresume/get_view_count

This project contains source code and supporting files for a front end of personal resume website to display view count. The website is hosted on AWS S3 and distributed by CloudFront. The source code is deployed with the CloudFormation template and Github Actions. It includes the following files and folders.

- www - HTML, CSS, Javascript of the website
- tests - Integration test for the website url. 
- template.yaml - CloudFormation template to deploy S3, CloudFront and R53
- .github/workflows/workflow.yml - Github workflow for CI/CD

Architecture:
![Architecture Diagram](https://i.imgur.com/uXJ6Qrx.jpg)

Visit https://github.com/longhtran91/www_resume_backend for the Back End
