import Table from "../components/Table"


function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Eggplant", color: "bg-purple-800", score: 10 },
    { name: "Apple", color: "bg-red-500", score: 15 },
    { name: "Blueberry", color: "bg-blue-500", score: 20 },
    { name: "Lime", color: "bg-green-300", score: 25}
  ]

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
    },
    {
      label: "Score",
      render: (fruit) => fruit.score
    }

  ]

  const keyFn = (fruit) => {
    return fruit.name
  }
  return (
    <div>
      <Table data={data} config = {config} keyFn = {keyFn} />
    </div>

  )
}

export default TablePage;
