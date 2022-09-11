# Dashnote

Dashnote is a webapp for creating flashcards.



## Setup

### Local development

* Start frontend
  * Navigate to `dashnote/frontend`
  * `npm install`
  * `npm start`
* Start backend
  * Navigate to `dashnote/backend`
  * Add `MONGODB_URI=[Your mongodb url here]` to `.env` in `dashnote/backend`
  * `npm install`
  * `npm run dev`

### Run app through docker

* Navigate to `dashnote/`

* Copy `docker-compose.example.yml` template to `docker-compose.yml`
* Modify `MONGODB_URI` to include the url to your Mongodb server
* `docker-compose up`



## MSA Requirements Implemented

### Frontend

* Advanced Features
  * UI Scalability with window size
  * Mobile first development (using media query breakpoints, etc)
  * Storybook w/ both actions and interactions (play)
  * API connection to your own API that is cloud hosted
  * At least one fluid animation
* Expert Features
  * A YAML CI/CD pipeline which builds and deploys a containerised application to either Azure or AWS, which is configured to use environment variables correctly.

### Backend

* Expert Features
  * A YAML CI/CD pipeline which builds and deploys a containerised API to either Azure or AWS, which is configured to set and use environment variables correctly.
  * Implementation and support of GraphQL

