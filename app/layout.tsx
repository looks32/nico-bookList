import "../css/reset.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import BottomScroll from "../components/bottomScroll";

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
        <Footer/>
        <BottomScroll/>
      </body>
    </html>
  );
}