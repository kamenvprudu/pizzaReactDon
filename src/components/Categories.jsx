

function Categories({value,onClickCategory}){

  const catigories=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']



  

  return(
    
    <div className="categories">
    <ul>
  {
catigories.map((catName,i)=>(
  
  <li key={catName} onClick={()=>onClickCategory(i)} className={value===i?'active':''}>{catName}</li>
  
)

)

  }
 
    </ul>
  </div>
  )
}


export default Categories