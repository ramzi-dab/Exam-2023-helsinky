//header's component
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
      <Part part={props.parts.part1.name} numEx={props.exercices.part1.exercises} />
      <Part part={props.parts.part2.name} numEx={props.exercices.part2.exercises} />
      <Part part={props.parts.part3.name} numEx={props.exercices.part3.exercises} />

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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  
  return (
    <div>
      <Header course={course} />
      <Content parts={{part1,part2,part3}} exercices={{part1,part2,part3}}/>
      <Total totalEx={part1.exercises+part2.exercises+part3.exercises}  />
    </div>
  )
}

export default App
