import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import EmptyMsg from '../EmptyMsg/EmptyMsg';
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])
  
  if(isLoading) return <LoadingSpinner />

  if(error) return <h1>Hubo un error</h1>
  
  const emptyCategory = () => {
    let outOfStock = false
    data.forEach(prod => { 
      outOfStock = prod.stock === 0 ? true : false })
    return outOfStock
  }

  return(
    <div className='itemList-container'>
      {emptyCategory()
        ? <EmptyMsg message={'No hay productos'} img={'https://c.tenor.com/LeAXiJBHqaMAAAAi/kikicat-kikiapp.gif'} />
        : <ItemList products={data} />}
    </div>
  )
}

export default ItemListContainer