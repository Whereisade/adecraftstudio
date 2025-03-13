
import "./globals.css";



export const metadata = {
  title: "Fawaz's Portfolio",
  description: "Personal portfolio of Fawaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}