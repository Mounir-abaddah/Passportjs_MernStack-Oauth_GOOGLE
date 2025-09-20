# 🚀 Google Authentication with Passport.js, Express & MongoDB  

👉 If you find this project useful, **don’t forget to give it a ⭐️ on GitHub!**  
👉 Si tu trouves ce projet intéressant, **n’hésite pas à lui mettre une ⭐️ sur GitHub !**  

---

## 🇬🇧 English  

This project implements **Google OAuth 2.0 authentication** using **Passport.js** in a **Node.js + Express** application, with **MongoDB** for user storage.  

---  

### 📦 Installation  

1. **Clone the project**  
   ```bash
   git clone <repo-url>
   cd <project-name>
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Setup environment variables**  
   Create a **.env** file in the project root:  
   ```env
   PORT=5000
   SECRET_KEY=your_session_secret
   JWT_SECRET=your_jwt_secret
   MONGO_URI=url mongodb
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=url callbackurl
   FRONTEND_URL=frontendurl
   NODE_ENV=development
   ```

4. **Run the server**  
   ```bash
   npm start
   ```

   Server will run at:  
   ```
   http://localhost:5000
   ```

---  

### 🔑 Authentication Routes  

- **Start Google authentication**  
  ```
  GET /auth/google
  ```

- **Google callback (after login)**  
  ```
  GET /auth/google/callback
  ```
  - On success:  
    - A **JWT token** is generated  
    - Token is stored in a secure `token` cookie  
    - User is redirected to `FRONTEND_URL/Dashboard`  

---  

### ⚙️ Google OAuth Setup (Console)  

1. Go to [Google Cloud Console](https://console.cloud.google.com/).  
2. Create a new project (or select an existing one).  
3. Navigate to **APIs & Services > Credentials**.  
4. Click **Create Credentials > OAuth Client ID**.  
5. Choose **Web application** as application type.  
6. In **Authorized redirect URIs**, add:  
   ```
   http://localhost:5000/auth/google/callback
   ```
7. Copy the **Client ID** and **Client Secret** into your `.env` file:  
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```  

---

## 🇫🇷 Français  

Ce projet met en place une **authentification Google OAuth 2.0** avec **Passport.js** dans une application **Node.js + Express**, en utilisant **MongoDB** pour stocker les utilisateurs.  

---  

### 📦 Installation  

1. **Cloner le projet**  
   ```bash
   git clone <url-du-repo>
   cd <nom-du-projet>
   ```

2. **Installer les dépendances**  
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**  
   Créez un fichier **.env** à la racine du projet :  
   ```env
   PORT=5000
   SECRET_KEY=ton_secret_session
   JWT_SECRET=ton_secret_jwt
   MONGO_URI=url mongourl
   GOOGLE_CLIENT_ID=ton_google_client_id
   GOOGLE_CLIENT_SECRET=ton_google_client_secret
   GOOGLE_CALLBACK_URL=frontend callbackurl
   FRONTEND_URL=url frontend
   NODE_ENV=development
   ```

4. **Lancer le serveur**  
   ```bash
   npm start
   ```

   Le serveur sera accessible sur :  
   ```
   http://localhost:5000
   ```

---  

### 🔑 Routes d'authentification  

- **Démarrer l’authentification Google**  
  ```
  GET /auth/google
  ```

- **Callback Google (après login)**  
  ```
  GET /auth/google/callback
  ```
  - Si l’auth est réussie :  
    - Un **token JWT** est généré  
    - Le token est stocké dans un cookie sécurisé `token`  
    - L’utilisateur est redirigé vers `FRONTEND_URL/Dashboard`  

---  

### ⚙️ Configuration OAuth Google (Console)  

1. Rendez-vous sur [Google Cloud Console](https://console.cloud.google.com/).  
2. Créez un projet (ou sélectionnez-en un existant).  
3. Allez dans **API et services > Identifiants**.  
4. Cliquez sur **Créer des identifiants > ID client OAuth**.  
5. Choisissez **Application Web** comme type d’application.  
6. Dans **URIs de redirection autorisés**, ajoutez :  
   ```
   http://localhost:5000/auth/google/callback
   ```
7. Copiez le **Client ID** et le **Client Secret** et collez-les dans votre fichier `.env` :  
   ```env
   GOOGLE_CLIENT_ID=ton_google_client_id
   GOOGLE_CLIENT_SECRET=ton_google_client_secret
   ```  
