
import {useDispatch,useSelector} from "react-redux";
import Cards from "../components/Cards";
import { filterCards, orderCards, reset} from "../redux/actions";

export default function Favorites (props){ // antes recibe {myFavorites}

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.myFavorites);
  

    function handleSort(e) {
        dispatch(orderCards(e.target.value));
      }

      function handleFilter(e) {
        dispatch(filterCards(e.target.value));
      }

      function handleReset (){
        dispatch(reset())
      }

     
return(
    <>
    <div>
    <select placeholder="Order" onChange={handleSort}>
      <option value="Ascendente">Ascendente</option>
      <option value="Descendente">Descendente</option>
    </select>
      <select placeholder="gender" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option value={gender}>{gender}</option>
        ))}
      </select>
      <button value='Reset' onClick = {handleReset}>Reset</button>
    </div>
    <div>
        <Cards characters={favorites}/>
    </div>
    </>
)
}


// se sustituye con el useSelector
// const mapStateToProps = (state) =>{
//     return{
//         myFavorites: state.myFavorites
//     }
// }

// export default connect (mapStateToProps)(favorites)