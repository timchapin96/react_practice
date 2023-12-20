import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Can I use REact?',
      content: 'Yes you can. Yes you can. Yes you can. Yes you can. Yes you can.'
    },
    {
      id: 2,
      label: 'Can I use Javascript?',
      content: 'Yes you can use it on any project you want. Yes you can use it on any project you want. Yes you can use it on any project you want. Yes you can use it on any project you want. Yes you can use it on any project you want.'
    },
    {
      id: 3,
      label: 'Can I use CSS?',
      content: 'Yes you can. Yes you can. Yes you can. Yes you can. Yes you can. Yes you can. Yes you can. Yes you can.'
    }
  ]


return <Accordion items={items}></Accordion>
}

export default AccordionPage;
