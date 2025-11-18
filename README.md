# Interview questions

What is Firebase?

- Firebase is Google's mobile and web application development platform that provides backend services to help developers build, manage, and scale apps more easily. Firebase is a Backend-as-a-Service (BaaS) platform created by Google that provides ready-made tools and infrastructure so developers can build web and mobile apps without managing servers.

Is Firebase a frontend or a backend?

- Firebase is a backend, but it is designed so you can use it directly from your frontend. Firebase is a backend-as-a-service (BaaS) platform that provides backend tools for developers, though it also supports front-end development through client-side SDKs.
  What is Firebase architecture?
- Firebase architecture is based on a serverless, cloud-managed backend that exposes its services directly to client apps through SDKs. Firebase architecture is a serverless, Backend-as-a-Service (BaaS) model that integrates various pre-built cloud services to build and scale applications, allowing developers to focus on the frontend and user experience instead of managing backend infrastructure.
  What are the features of Firebase? / What are the tasks you can accomplish with Firebase? - Firebase is a Backend-as-a-Service (BaaS) platform by Google that provides a wide range of cloud-based tools to help developers build, manage, and scale web and mobile apps without managing servers.

Key features and the tasks you can accomplish with Firebase:
1️⃣ Authentication

Tasks you can accomplish:
Sign up / sign in users with email/password.
Social login: Google, GitHub, Facebook, Twitter.
Anonymous login for temporary sessions.
Phone number authentication.
Multi-factor authentication (MFA).
Manage users securely (password reset, email verification, account linking).

2️⃣ Databases

Firebase offers two main database services:

a) Firestore (Cloud Firestore)

NoSQL, document-based database.
Real-time syncing across clients.
Offline support.
Structured and hierarchical data.
Strong security with rules per document/collection.

b) Realtime Database

JSON tree-based database.
Real-time updates for all connected clients.
Works well for chat apps, live feeds, and multiplayer games.
Tasks you can accomplish:
Store and fetch structured data.
Sync live data to multiple users instantly.
Enable offline-first experiences.
Secure access with database rules.

3️⃣ Cloud Storage

Tasks you can accomplish:
Upload and store user-generated content (images, videos, PDFs).
Download or stream content efficiently.
Control access with storage security rules.
Scale storage automatically without managing servers.

4️⃣ Hosting

Tasks you can accomplish:
Deploy static websites or single-page apps (React, Angular, Vue).
Use a global CDN for fast content delivery.
Free SSL certificates for HTTPS.
Easy CI/CD with Firebase CLI.
Support for serverless hosting and rewrites for SPAs.

5️⃣ Cloud Functions (Serverless Backend)

Tasks you can accomplish:

Run backend code without provisioning servers.
Trigger functions on database writes, auth events, file uploads, or HTTP requests.
Create APIs for your app.
Automate server-side tasks (notifications, emails, analytics processing).

6️⃣ Analytics & Monitoring

Tasks you can accomplish:

Track user behavior and app usage with Google Analytics.

Monitor app crashes using Crashlytics.

Measure performance with Performance Monitoring.

A/B testing and remote configuration.

7️⃣ Messaging & Notifications

Firebase Cloud Messaging (FCM)

Send push notifications to web, iOS, and Android.

Schedule notifications.

Segment users and send targeted messages.

8️⃣ Remote Config & A/B Testing

Tasks you can accomplish:
Change app behavior and UI without redeploying.
Roll out features gradually.
Run experiments to optimize user experience.

9️⃣ Security & Identity Management

Tasks you can accomplish:

Secure databases and storage with Firebase Security Rules.

Manage user access and permissions.

Protect sensitive data without managing servers.

🔟 Machine Learning (ML Kit)

Tasks you can accomplish:
Image labeling, text recognition, and face detection.
Translation and language processing.
Barcode scanning.

Differences between firebase and mongodb

1️⃣ Type of Service
Feature
Firebase
MongoDB
Service Type
Backend-as-a-Service (BaaS) / Platform as a Service
Database only (NoSQL document database)
Backend Management
Fully managed backend, includes auth, storage, hosting, functions
Only database; you manage the backend or use MongoDB Atlas (cloud)
Serverless
Yes
No (unless using Atlas serverless instances)

2️⃣ Database Model
Feature
Firebase
MongoDB
Data Structure
NoSQL JSON documents (Firestore) or tree-like JSON (Realtime DB)
NoSQL JSON-like documents (BSON)
Schema
Flexible, can be structured with rules (Firestore)
Flexible, fully schema-less, and can enforce schema via Mongoose
Real-Time
Yes, built-in real-time syncing
Not real-time by default; needs polling or change streams
Offline Support
Yes, built-in offline support for clients
Partial; MongoDB Realm or custom sync needed

3️⃣ Backend Capabilities

Feature
Firebase
MongoDB
Authentication
Built-in auth system (Google, GitHub, Email/Password, Phone)
No built-in auth; must implement backend auth yourself
Hosting
Yes, web hosting with CDN & SSL
No
Cloud Functions
Yes, serverless functions triggered by events
No, backend must be implemented separately
Push Notifications
Yes (FCM)
No

What is Firebase's real-time database?

- Firebase’s Realtime Database is a cloud-hosted NoSQL database that stores data as a JSON tree and allows real-time synchronization between clients. It’s one of Firebase’s core services and is designed for apps that need live updates across devices.
  Can you briefly explain the GitHub authentication process with Firebase?
- 1️⃣ Enable GitHub as a Sign-in Provider
  Go to Firebase Console → Authentication → Sign-in Method → GitHub.
  Enable it and enter your GitHub OAuth App Client ID and Client Secret.
  Set the OAuth redirect URL in GitHub to the URL Firebase provides.
  2️⃣ Add GitHub Provider in Your App
  In your React (or any frontend) app:
  import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
  import { auth } from "./firebase"; // your Firebase initialization
  const provider = new GithubAuthProvider();
  Optionally, request the email scope if you need the user’s email:
  provider.addScope("user:email");
  3️⃣ Trigger GitHub Sign-In
  Use signInWithPopup (or signInWithRedirect):
  signInWithPopup(auth, provider)
  .then((result) => {
  const user = result.user; // Firebase user info
  const credential = GithubAuthProvider.credentialFromResult(result);
  const token = credential.accessToken; // GitHub OAuth token
  console.log(user, token);
  })
  .catch((error) => {
  console.error(error);
  });
  Which method is used to sign in the user in Firebase Email/Password authentication?
- In Firebase Email/Password authentication, the method used to sign in a user is:
  signInWithEmailAndPassword(auth, email, password)
  Details
  Import the method from Firebase Auth:
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  Usage example:
  const auth = getAuth();

signInWithEmailAndPassword(auth, "user@example.com", "password123")
.then((userCredential) => {
// Signed in successfully
const user = userCredential.user;
console.log("User logged in:", user.email);
})
.catch((error) => {
// Handle errors
console.error("Error signing in:", error.code, error.message);
});
Authentication vs Authorization
1️⃣ Authentication
Definition: Authentication is the process of verifying a user's identity — checking if they are who they claim to be.
Purpose: To confirm the user’s identity before allowing access.
How it works:
The user provides credentials (username/password, Google/GitHub login, OTP, etc.).
The system checks those credentials against its database or an external provider.
If valid, the user is considered “authenticated.”
Examples:
Log in to Gmail with your email and password.
Signing in with Google/Facebook via Firebase.
Entering a one-time password (OTP) on a banking app.
