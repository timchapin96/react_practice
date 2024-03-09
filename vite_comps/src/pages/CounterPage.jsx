import Button from '../components/Button';
import useNumber from '../hooks/use-counter';

function CounterPage({ initialCount }) {

  const {count, increment } = useNumber(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>
        Increment
      </Button>
    </div>
  )
}

export default CounterPage;
