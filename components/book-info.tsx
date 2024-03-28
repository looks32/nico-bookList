import styles from "../css/bookInfoList.module.css";

const API_URL = "https://books-api.nomadcoders.workers.dev/list?name="

async function getBook(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const book = await getBook(id);
  return (
	<>
  		<h3>{book.results.list_name}</h3>
		<ul className={styles.list}>
			{book.results.books.map((b) => (
				<li key={b.rank}>
					<img src={b.book_image} alt={b.title} />
					<strong>{b.title}</strong>
					<a href={b.amazon_product_url} title={b.title} target="_blank">Buy Now</a>
				</li>
			))}			
		</ul>
  	</>
  );
}