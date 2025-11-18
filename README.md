# 🔥 Firebase Interview Preparation — Complete Notes

This README contains essential Firebase concepts, definitions, comparisons, and multiple-choice questions commonly asked in interviews.

---

# 📌 **1. Core Firebase Concepts**

## **What is Firebase?**

Firebase is Google’s mobile & web application development platform that provides backend services such as authentication, databases, hosting, storage, and analytics.
It is a **Backend-as-a-Service (BaaS)** that allows developers to build applications without managing servers.

---

## **Is Firebase frontend or backend?**

Firebase is a **backend**, but it provides **frontend SDKs** so your React, Android, iOS, and Flutter apps can communicate directly with its backend services.

---

## **Firebase Architecture**

Firebase follows a **serverless cloud architecture**, built on:

* **Client Layer:** Web, iOS, Android, Flutter apps using SDKs
* **Backend Services:** Auth, Firestore, Realtime DB, Cloud Functions, Hosting, Storage
* **Security Layer:** Firebase Security Rules for authentication & authorization

This architecture eliminates the need for manual server management.

---

## **Features of Firebase / What you can do with Firebase**

### **1. Authentication**

* Email/Password login
* Google, GitHub, Facebook, Twitter OAuth
* Phone authentication
* Anonymous login
* Multi-factor authentication (MFA)
* Password reset, email verification, account linking

### **2. Databases**

#### **Firestore**

* NoSQL document DB
* Real-time syncing
* Offline support
* Secure using rules

#### **Realtime Database**

* JSON tree structure
* Instant live updates
* Perfect for chat, multiplayer apps, dashboards

### **3. Cloud Storage**

* Upload images, videos, PDFs
* Scale automatically
* Maintain secure file access

### **4. Hosting**

* Deploy static sites / React SPAs
* Free SSL, CDN
* Easy deployment using Firebase CLI

### **5. Cloud Functions**

* Backend code without servers
* Trigger on auth, database, HTTP requests
* Build APIs or automated tasks

### **6. Analytics, Crashlytics, Monitoring**

* Track user behavior
* Crash reporting
* Performance insights
* A/B testing, Remote Config

### **7. Messaging (FCM)**

* Push notifications
* Targeted or scheduled messages

### **8. ML Kit**

* Text recognition, image labeling
* Translation
* Barcode scanning

---

## **Firebase vs MongoDB**

| Feature         | Firebase             | MongoDB         |
| --------------- | -------------------- | --------------- |
| Service Type    | Backend-as-a-Service | Database only   |
| Real-Time Sync  | Built-in             | Requires setup  |
| Offline Support | Built-in             | Partial         |
| Authentication  | Built-in             | Manual          |
| Hosting         | Yes                  | No              |
| Cloud Functions | Yes                  | No              |
| Ideal For       | Real-time apps       | Data-heavy apps |

---

## **Firebase Realtime Database**

A cloud-hosted NoSQL database that stores data as a JSON tree and syncs changes in **realtime** across all clients.
Ideal for chat apps, games, and collaborative apps.

---

## **GitHub Authentication with Firebase — Summary**

1. Enable GitHub provider in Firebase
2. Add GitHub OAuth credentials
3. Add provider in code:

```js
const provider = new GithubAuthProvider();
provider.addScope("user:email");
signInWithPopup(auth, provider);
```

---

## **Email/Password Login Method**

```js
signInWithEmailAndPassword(auth, email, password)
```

---

## **Authentication vs Authorization**

| Authentication    | Authorization              |
| ----------------- | -------------------------- |
| Verifies identity | Controls access level      |
| “Who are you?”    | “What can you do?”         |
| Example: Login    | Example: Role-based access |

---

# 📘 **Multiple Choice Questions**

### **Question 01 — What is Authentication?**

✔ Verify the identity of a user

---

### **Question 02 — What is Google Analytics used for?**

✔ To know website visitors and their usage patterns

---

### **Question 03 — Programming languages supported by Firebase**

✔ JavaScript, Swift, Java (and more)

---

### **Question 04 — What is true about Firebase config?**

❌ Includes secrets (wrong)
❌ Should not be shared (wrong for frontend apps)
✔ Correct answer: **It contains Firebase Cloud Project information**

Firebase config is safe to expose.

---

### **Question 05 — How to make GoogleAuthProvider?**

```js
const provider = new GoogleAuthProvider();
```

---

### **Question 06 — How to initialize Firebase app?**

✔ `initializeApp(firebaseConfig)`

---

### **Question 07 — Import signInWithPopup from:**

✔ `firebase/auth`

---

### **Question 08 — signInWithPopup() receives:**

✔ `auth, provider`

---

### **Question 09 — How to get logged-in user's name?**

```js
const { displayName } = res.user;
```

---
