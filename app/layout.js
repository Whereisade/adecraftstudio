
import "./globals.css";



export const metadata = {
  title: "AdeCraft Studio",
  description: "Personal portfolio of AdeCraft Studio, showcasing web design and software development expertise",
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