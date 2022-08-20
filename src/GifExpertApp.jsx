import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    
    // console.log(newCategory);
    setCategories([ newCategory, ...categories ]);
    // setCategories(cat => [...cat, 'Naruto']);
  }

  const onCleanCategories = () => {
    setCategories([]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory 
        onNewCategory = { value => onAddCategory(value) }
      />
      
      <button onClick={ onCleanCategories }>Limpiar categorias</button>

      { 
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category = {category} 
          />
        ))
      }
      
    </>
  )
}
