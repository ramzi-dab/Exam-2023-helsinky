const Header = (props) => {
  return (
    <h1>
      <p>{props.course}</p>
    </h1>
  )
}

const Part=(props)=>{
  return (
    <div>
      <p>{props.part} {props.numEx}</p>
    </div>
  )
}
const Content= (props) =>{
  console.log(props)
  return (
    <div>
      <Part part={props.parts.part1} numEx={props.exercices.exercises1} />
      <Part part={props.parts.part2} numEx={props.exercices.exercises2} />
      <Part part={props.parts.part3} numEx={props.exercices.exercises3} />

    </div>
  )
}
const Total=(props)=>{
  return (
    <div>
      <p>{props.totalEx}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  
  return (
    <div>
      <Header course={course} />
      <Content parts={{part1,part2,part3}} exercices={{exercises1,exercises2,exercises3}}/>
      <Total totalEx={exercises1+exercises2+exercises3}  />
    </div>
  )
}

export default App
