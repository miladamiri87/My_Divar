import { useParams, useLocation, useNavigate } from "react-router-dom"

import { getBook, deleteBook } from "../data/data"

const Book = () => {
    let navigate= useNavigate()
    let location = useLocation()
    let params = useParams()
    let book = getBook(params.bookId)
    console.log(deleteBook("03"))
    if(book){
        return (
            <>
                <div className="card w-50 text-center">
                
                    <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">{book.price}</p>
                        <p className="card-text">{book.author}</p>
                    </div>
                    <button className="btn btn-danger" 
                    onClick={()=>{
                        deleteBook(book.id)
                        navigate("/books")
                    }}
                    >حذف کردن</button>
                </div>
            </>
        )
    }else{
        return(
            <>
            <p>چنین کتابی یافت نشد</p>
            </>
        )
    }
}
export default Book