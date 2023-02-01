# ApplyAI
This project contains a collection of AI tools to make the job search process easier

## Introduction

To start using the project, you will need the following. Node version 14 or above, MongoDB Cloud, an OpenAI account and key and Python.

### Current Configuration
These are quite important as they can effect the installation and dependencies of the project. Please use the following:

- Node Version 14.17.6
- NPM Version 6.14.15
- Python Version 2.7

### Starting Guide

Prepare the following items

- OpenAI account + API Key
- MongoDB Cloud instance database (free tier) + Cluster/Login
- NodeJS
- StripeJS (not required unless implementing billing)

### Installation

- Perform a NPM install or Yarn in the rood directory to install modules
- Update the ENV keys (or ENV.DEV) for your environemnt (for OpenAI, Mongo Etc)
- - MongoDB requires Cluster, Database, Username and Password
- For PC `npm run api` to start the instance of the project
- For Mac `npm run apimac` to start the instance of the project
- Start the Create React App using `npm start`

On first run, the database will initialise with an admin user at `/routes/middleware/mongo.js` which can be updated

You will be able to login with the following details:
Username: admin@domain.com
Password: KeepingHumanSafe101

Adding users can be done through the signup form or directly on Mongo (database)

You should have an instance of the backend and frontend running.

For more information, please follow the video attached to this project. This is a starter template. Support is not included as part of the download. Debugging and such will need to be performed at on your own, as well as implementing features.

There is the option to add Stripe, which is currently configured for subscriptions, you will need to connect the Stripe API, Webook URL, and create pricing plans (tempalates provided).

### Bugs and Fixes
None