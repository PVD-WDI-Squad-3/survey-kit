# SurveyKit

## Build Your Survey in a Pinch


Deployed: https://polar-fjord-39713.herokuapp.com/


For our first team project, we followed the assigned prompt to build a custom survey app, à la Survey Monkey.


### The prompt

Make an app that can be used to create custom surveys (for instance, asking "what should we eat for lunch today?" or "On a scale of 0-5, how well did you understand what we just learned?") and collect the responses on a dashboard for that particular survey. Each live survey should be hosted at a unique, randomly-generated URL.

### About the app

Users of this app can create, view, take and delete surveys.  There are two types of users, registered and un-registered, which have varying user capabilities.

**Registered users** create an account by registering with an email and password. Once registered, they are prompted to sign in.  Once signed in, they have the following options: change password, log out, create survey, view all surveys, view their own survey(s), delete a survey, and take a survey.

**Un-registered users** have the option to view surveys and take surveys only.

Our planning documents, including our user stories, ERD, and wireframes,
can be found [here](https://docs.google.com/document/d/1JZLS4SFVwl-2guNw10I9j4O9nWy22VpnurYFZH-N2y0/view#heading=h.7jvizmirubyl).

### Routes/End-Points


| Verb          | URI Pattern        | Controller#Action |
| ------------- |:------------------:| -----------------:|
| GET           | /surveys           | surveys#index     |
| GET           | /surveys /:id      |   surveys#show    |
|               |                    |                   |


### Front-End Repo
https://github.com/PVD-WDI-Squad-3/survey-kit-front-end
