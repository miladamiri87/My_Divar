import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"
import { getBooks } from "../data/data"

const Books = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let location= useLocation()
  let books = getBooks()
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Search"
          value={searchParams.get("filter")}
          onChange={event=>{
            let filter= event.target.value
            if(filter){
              setSearchParams({filter})
            }else{
              setSearchParams({})
            }
          }}
          />
          {
            books.filter(book=>{
              let filter =searchParams.get("filter")
              if(!filter) return true
              let name= book.name
              return name.startsWith(filter)
            })
            .map((book => (
              <NavLink style={({isActive})=>{
                return{
                  color : isActive ? "red" : ""
                }
              }} to={`${book.id}${location.search}`} key={book.id}>{book.name}</NavLink>
            )))
          }
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Books