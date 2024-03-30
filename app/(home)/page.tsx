import Link from "next/link";
import styles from "../../css/categoryList.module.css"

export const metadata = {
  title: "Home",
};


async function getBooks() {
  const response = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const json = await response.json();
  return json;
}


export default async function Home() {
	const books = await getBooks();
	return (
	<>
      <h2>The New York Times Best Seller Explorer</h2>
	  <div className={styles.list}>
		{books.results.map((book,i) => (
		  <li key={book.list_name_encoded} style={{'animationDelay':100*i+"ms"}}>
			<Link href={`/list/${book.list_name_encoded}`}>{book.display_name}</Link>
		  </li>
		))}
	  </div>
	  </>
	);
  }