// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "LawStick",
//   description: "law Related Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">

//       <body className={inter.className}>
//         <Navbar></Navbar>
//         {children}
//         <Footer></Footer>
//         </body>
//     </html>
//   );
// }


// app/layout.js
import { Inter } from "next/font/google";
import './globals.css';
import Footer from "@/components/Footer";
import NavbarSwitcher from "@/components/NavbarSwitcher";
import Notifications from "@/components/Notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LawStick",
  description: "law Related Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  <NavbarSwitcher />
  {children}
        <Footer />
      </body>
    </html>
  );
}

