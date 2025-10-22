# 🌿 Life On Land 

A beautifully animated **splash screen** created using **HTML5**, **CSS3**, and **JavaScript**, featuring a **background video**, smooth **fade animations**, and a **team introduction section**.  
This project is part of the *Life On Land* theme, emphasizing unity, stewardship, and environmental responsibility.

---

## 🎬 Preview

![Splash Screen Preview](splash-preview.gif)

> *"Unite hearts, nurture land — cultivating a legacy of stewardship for a flourishing planet."*

---

## 🚀 Features

- 🌌 **Full-Screen Background Video**
- 💫 **Smooth Text Animations (fade-in, up & down transitions)**
- 👥 **Group Members Section with Elegant Typography**
- 🔄 **Animated Loader Transition**
- ⏩ **Automatic Redirect to Next Page (`student_2.html`)**
- 🧊 **Modern Glass Blur Overlay**
- 🎨 **Responsive Typography with `clamp()`**
- 🖋️ **Google Fonts (Poppins)**

---

## 🧱 Project Structure

```
LifeOnLand-SplashScreen/
│
├── index.html          # Main splash screen file
├── splashvideo.mp4     # Background video file
├── loader.gif          # Loading animation
├── student_2.html      # Next page to redirect
├── README.md           # Project documentation
└── assets/             # (Optional) Folder for future assets
```

---

## ⚙️ How It Works

1. The splash screen plays a **looping background video** with dimmed brightness.
2. The text (title, quote, and members) **fades in with smooth animations**.
3. After **1 second**, the **loader** (`loader.gif`) appears.
4. After another **4 seconds**, the page automatically redirects to `student_2.html`.

---

## 🖋️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and layout |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript** | Splash delay and redirection |
| **Google Fonts (Poppins)** | Modern and clean typography |
| **MP4 Video** | Background visual element |

---

## 💡 Customization

You can easily modify the following:
- **Change Redirect Page:**  
  Update the redirect URL in the JavaScript section:
  ```js
  window.location.href = 'your-page.html';
  ```
- **Update Background Video:**  
  Replace `splashvideo.mp4` with your own video file.
- **Add or Remove Group Members:**  
  Edit the `<ul>` section under **Group Members**.

  ---

## 👩‍💻 Contributors

| Name | Role |
|------|------|
| **S.D.P.Y. Sandanayaka** | Project Member |
| **C.S. Wijewantha** | Project Member |
| **R.M.M. Kavindu Uppala Rajapaksha** | Project Member |

---

## ✨ Animations

- **fadeIn** – gradual appearance  
- **fadeInDown** – slides text downward into view  
- **fadeInUp** – slides text upward into view  
- **loader** – smooth reveal with shadow glow

---

## 📁 Assets Credit

- 🎥 Background video – royalty-free video (e.g., Pexels / Pixabay)  
- 🌀 Loader GIF – custom loading animation  
- 🖋 Font: [Poppins by Google Fonts](https://fonts.google.com/specimen/Poppins)

---

## 🧾 License

This project is created for **educational and presentation purposes**.  
You may modify and reuse it with proper credit to the original contributors.

---

## 🌱 “Together for a Greener Tomorrow”

> Designed and developed with 💚 by **Team Life On Land**
