

# 🛒 EasyBuy — E-commerce Web App

EasyBuy is a modern full-stack e-commerce application built with **Next.js**, **Zustand**, and **Stripe**. It provides a fast, responsive shopping experience with secure online payments.

---

## 🚀 Tech Stack

### Frontend & Framework

* ⚡ Next.js (React Framework)
* ⚛️ React
* 🎨 Tailwind CSS / CSS Modules

### State Management

* 🧠 Zustand (Lightweight global state)

### Payments

* 💳 Stripe (Secure checkout)

### Backend

* 🔌 Next.js API Routes / Server Actions

---

## ✨ Features

* 🛍️ Product Listing & Details Page
* 🔎 Search & Filter Products
* 🧺 Shopping Cart (Global state with Zustand)
* ❤️ Add / Remove Items from Cart
* 💰 Secure Stripe Checkout
* 📦 Order Summary
* 📱 Fully Responsive Design
* ⚡ Fast Performance with Next.js
* 🔐 Server-side payment handling

---

## 📂 Project Structure

```
easybuy/
│
├── app/ or pages/      # Next.js routes
├── components/         # Reusable UI components
├── store/              # Zustand store
├── lib/                # Utilities & helpers
├── public/             # Static assets
├── styles/             # Global styles
├── pages/api/          # API routes (Stripe)
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/easybuy.git
cd easybuy
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Get your keys from the Stripe Dashboard.

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 💳 Stripe Checkout Flow

1. User adds items to cart
2. Cart state managed by Zustand
3. Checkout request sent to API route
4. Stripe session created on server
5. User redirected to Stripe secure payment page
6. Success / Cancel redirect handled

---





```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Githinji William**

* 💻 Full-Stack Developer
* ⚡ Passionate about modern web apps

---

