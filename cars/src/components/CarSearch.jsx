import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store'

export default function CarSearch () {
  const dispatch = useDispatch(() => {
    return
  })

  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm
  })

  const handleChangeSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className='search field is-horizontal'>
        <div className='label'>Search</div>
        <input
          type='text'
          className='Input'
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  )
}
