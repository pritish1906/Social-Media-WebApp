Social Media App
This is a social media app built using the following tech stack:

TypeScript for the front-end
React.js for the front-end
Firebase for the back-end and database
The app allows users to create profiles, share posts, like and dislike posts, and authenticate with Google Authenticator.

Getting Started
To get started with the app, you will need to have Node.js and Firebase CLI installed on your machine.

Installation
Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/pritish1906/Social-Media-App.git
Once the repository is cloned, navigate to the root directory of the project and run the following commands:

Copy code
npm install
Configuration
The app uses Firebase for the back-end and database. You will need to create a Firebase project and configure the app to use your Firebase project.

Go to the Firebase console and create a new project.
Click on "Add app" and select "Web".
Follow the instructions to register the app and obtain your Firebase configuration.
Create a .env file in the root directory of the project and add the following variables:
makefile
Copy code
REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
Running the App
To run the app, navigate to the root directory of the project and run the following command:

sql
Copy code
npm start
This will start the front-end server.

Features
Liking and Disliking Posts
Users can like and dislike posts by clicking on the corresponding buttons.

Google Authenticator
Users can authenticate using Google Authenticator.

Creating Posts
Users can create new posts by clicking on the "Create" button and filling out the form.

Contributing
Contributions to the project are welcome. If you find any bugs or issues, please open an issue on the repository or submit a pull request with the fix.

License
This project is licensed under the MIT License. See the LICENSE.md file for details.
