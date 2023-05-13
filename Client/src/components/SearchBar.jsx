import style from './SearchBar.module.css'



export default function SearchBar({onSearch, onChange}) {

   return (
      <div className= {style.searchContainer}>
         <input className= {style.searchInput} type="search" placeholder="Add id" onChange={onChange}/>
         <button className= {style.addButton} onClick={onSearch}>Add</button>
      </div>
   );
};
