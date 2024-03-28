import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../css/reset.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Library",
    default: "Library",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/neodgm/neodgm-webfont@1.530/neodgm/style.css"/>
      </head>
      <body>
        <Navigation />
        <div className="main_inner">
          {children}
        </div>
      </body>
    </html>
  );
}