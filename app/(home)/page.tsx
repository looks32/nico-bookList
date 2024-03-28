import Link from "next/link";
import styles from "../../css/categoryList.module.css"

export const metadata = {
  title: "Home",
};

export const API_URL = " https://books-api.nomadcoders.workers.dev/lists";

async function getBooks() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}


export default async function Home() {
	const books = await getBooks();
	return (
	<>
      <h2>The New York Times Best Seller Explorer</h2>
	  <div className={styles.list}>
		{books.results.map((book) => (
		  <li key={book.list_name_encoded}>
			<Link href={`/list/${book.list_name_encoded}`}>{book.display_name}</Link>
		  </li>
		))}
	  </div>
	  </>
	);
  }