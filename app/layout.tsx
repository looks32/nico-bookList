import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../css/app.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 하세기!",
    default: "Library",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="main_inner">
          {children}
        </div>
      </body>
    </html>
  );
}