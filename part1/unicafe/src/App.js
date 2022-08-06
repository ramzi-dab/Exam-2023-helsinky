import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)






const Perc = (feeds) => {
  

  if (feeds.good === 0) {
    return (
      <div>
        Positif feeds % : there are no feeds yet 
      </div>
    )
  }
  return (
    <div>
        {100/feeds.total*feeds.good} %
    </div>
  )
}

const Average= (feeds) => {
  if (feeds.good === 0  && feeds.bad=== 0 && feeds.neutral===0) {
    return (
      <div>
        Average : there are no feeds yet 
      
      </div>
      
    )
  }
  return (
    <div>
      {((feeds.good*1)+(feeds.bad*(-1))) /feeds.total}
      
    </div>
  )
}
const StatisticsLine = (props)=>{
  return(
      <div>
        {props.text} {props.value}
      </div>
      
  )
}

const Statistics=(feeds)=>{

  const positifPerc=Perc(feeds)
  const average=Average(feeds)
  
  if(feeds.good === 0  && feeds.bad=== 0 && feeds.neutral===0){
    return(
      <div>
        No FeedBack given
      </div>
    )
  }
  
  return(
    
      <table>
        <thead>

        </thead>
        <tbody>
        <tr>
          <td><StatisticsLine text="Good :" /> </td>
          <td><StatisticsLine value={feeds.good} /> </td>
        </tr>
        <tr>
          <td><StatisticsLine text="Neutral :" /> </td>
          <td><StatisticsLine value={feeds.neutral}  /> </td>
        </tr>
        <tr>
          <td><StatisticsLine text="Bad :" /> </td>
          <td><StatisticsLine value={feeds.bad} /> </td>
        </tr>
        <tr>
          <td><StatisticsLine text="Total-feeds :" /> </td>
          <td><StatisticsLine value={feeds.total} /> </td>
        </tr>
        <tr>
          <td><StatisticsLine text="Average :" /> </td>
          <td><StatisticsLine value={average} /> </td>
        </tr>
        <tr>
          <td><StatisticsLine text="Positif % :" /> </td>
          <td><StatisticsLine value={positifPerc} /> </td>
        </tr>
        </tbody>
      </table>
    
  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feeds={good,
            bad,
            neutral,
            total:good+bad+neutral }
  
  const statistics=Statistics(feeds)

  return (
    <div>
      <h1>Give Feedback</h1>
      <br/>
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+1)} text="Bad" />
      <h2>Statistics</h2>
        <br/>
      <div>
        {statistics}
      </div>

    </div>
  )
}

export default App