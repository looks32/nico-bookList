import styles from "../css/bookInfoList.module.css";

export async function getBook(id: string) {
  const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=/${id}`);
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const book = await getBook(id);
  return (
	<>
  		<h3>{book.results.list_name}</h3>
		<ul className={styles.list}>
			{book.results.books.map((b,i) => (
				<li key={b.rank} style={{'animationDelay':100*i+"ms"}}>
					<a href={b.amazon_product_url} title={b.title} target="_blank">
						<div className={styles.img_wrap}>
							<img src={b.book_image} alt={b.title} />
						</div>
						<div>
							<strong>{b.title}</strong>
							<p>Buy Now</p>
						</div>
					</a>
				</li>
			))}			
		</ul>
  	</>
  );
}