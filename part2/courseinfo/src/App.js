const Header=({course})=>{

  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}





const Content=({parts})=>{
  const total =parts.reduce((sum, part) => sum+part.exercises,0)
  console.log(total)
  const content= parts.map(part =>
    <p key={part.id}>{part.name} {part.exercises}</p>
  )
console.log(content)
  return(
    <div>
      {content}
       total of {total} exercices
    </div>
  
    
    )
}


const Course=({courses})=>{
  const content=courses.map(course =>
    <li key={course.id}> <Header course={course}/>
    <Content parts={course.parts}/></li>)
  return(
    <div>
      <p>Web Development Curriculum</p>
      {content}
    </div>
  )

}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Course courses={courses} />
  
    )
}

export default App