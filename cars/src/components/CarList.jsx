import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store'

export default function CarList () {
  const dispatch = useDispatch()
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      cars: filteredCars,
      name: form.name
    }
  })

  const handleCarDelete = car => {
    dispatch(removeCar(car.id))
  }

  const renderedCars = cars.map(car => {
    //DECIDE IF THIS CAR SHOULD BE BOLD
    //state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <div onClick={() => handleCarDelete(car)} className='button is-danger'>
          Delete
        </div>
      </div>
    )
  })
  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}