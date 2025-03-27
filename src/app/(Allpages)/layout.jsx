import Navbar from "./(pages1)/ui/Navbar";
import Services from "./(pages1)/ui/Services";
import "./global.css";
export const metadata = {
  title: "BARDMOCK",
  description:
    "Create your own custom game board!,Pick Spinner / Playing Cards ",
  icons: { icon: "/2.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="box-border p-0 m-0">
      <body className="overflow-x-hidden font-primary">
        {" "}
        <Navbar /> {children}
        <Services />
      </body>
    </html>
  );
}
