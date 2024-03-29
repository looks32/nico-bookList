import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
      <>
        <h2>Not found ㅠ_ㅠ</h2>
        <p>The requested path could not be found</p>
      </>
  );
}