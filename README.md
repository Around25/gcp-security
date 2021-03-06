# Out Of Stock Service POC in NodeJS

This code is used in the article [How to manage microservices security on Google Cloud Platform and App Engine](https://around25.com/blog/how-to-build-microservices-on-google-cloud-platform-and-app-engine-part-iii-security/).

In this series of articles I will share my own experience working with microservices on Google Cloud Platform, the different options that we have, pros, cons and limitations of each of the services in GCP, today we’ll focus on App Engine.

If you are here it is because you are already deciding about what flavor should be better for your use case and certainly you’re in the right place.

This code is very simple and will only deploy a service able to get notifications from cloud pub sub.

## How to deploy it?

1. Just download the code 
1. Execute `npm install`
1. Execute `gcloud app deploy`
1. Then `gcloud app browse`

You will see the health check in your browser.

## Complete series
1. [How to build microservices on Google Cloud Platform and App Engine](https://around25.com/blog/how-to-build-microservices-on-google-cloud-platform-and-app-engine-i/)
1. [How to troubleshoot microservices on Google Cloud Platform and App Engine](https://around25.com/blog/how-to-build-microservices-on-google-cloud-platform-and-app-engine-ii-troubleshooting-your-microservices/)
1. [How to manage microservices security on Google Cloud Platform and App Engine](https://around25.com/blog/how-to-build-microservices-on-google-cloud-platform-and-app-engine-part-iii-security/)
