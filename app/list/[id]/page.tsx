import BookInfo, {getBook} from "../../../components/book-info";


// export const metadata = {
//   title: "List",
// };

interface IParams {
  params:{id:string}
}


export async function generateMetadata({params: { id }}:IParams){
  const books = await getBook(id);
  return {
    title: books.results.list_name
  }
}

export default async function page({params: { id }}:IParams){
  return (
    <div>
	    <BookInfo id={id}/>
    </div>
  );
}