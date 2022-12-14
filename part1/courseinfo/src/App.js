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
      <Part part={props.parts[0].name} numEx={props.parts[0].exercises} />
      <Part part={props.parts[1].name} numEx={props.parts[1].exercises} />
      <Part part={props.parts[2].name} numEx={props.parts[2].exercises} />

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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} exercices={course.parts}/>
      <Total totalEx={ "total exercises= "+(course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises ) }  />
    </div>
  )
}

export default App