import BookInfo from "../../../components/book-info";

export default async function page({params: { id }}){
  return (
    <div>
	  <BookInfo id={id}/>
    </div>
  );
}