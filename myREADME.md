# E-commerce Website

This is a fully functional e-commerce website built with React, using Redux to manage state globally, Firebase, and Tailwind CSS. The website is deployed on Vercel.

## Live Links

- [Main Deployment](https://ecommerce-app-henna-eta.vercel.app)
- [Secondary Deployment](https://ecommerce-hbbm3ughh-henry-s-projects-59f57949.vercel.app)

## Features

- User Authentication (Sign up, Login, Logout) using Firebase
- Real-time Database using Firebase Firestore
- Responsive design with Tailwind CSS
- Product listing and details pages
- Shopping cart functionality
- Wishlist feature
- User account management

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore Database)
- **Deployment**: Vercel

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase project's configuration to `src/firebaseConfig.js`:
     ```js
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";
     import { getFirestore } from "firebase/firestore";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     const auth = getAuth(app);
     const db = getFirestore(app);

     export { auth, db };
     ```

4. **Run the development server**:
   ```sh
   npm run dev
   ```

5. **Build the project**:
   ```sh
   npm run build
   ```

## Deployment

This project is deployed on Vercel. Follow these steps to deploy:

1. **Install Vercel CLI** (if not already installed):
   ```sh
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```sh
   vercel login
   ```

3. **Deploy the project**:
   ```sh
   vercel
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides an overview of the project, how to install and run it locally, and how to deploy it on Vercel.
