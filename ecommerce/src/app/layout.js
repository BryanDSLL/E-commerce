import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../components/header.js"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
