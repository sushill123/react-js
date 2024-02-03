
const Card = () => {

  const data = [
    {
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      heading: 'Angelina',
      desc: 'Web designer',
    },
    {
      img: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
      heading: 'Martina',
      desc: 'Marketing',
    },
    {
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      heading: 'David',
      desc: 'Front end designer',
    }, {
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
      heading: 'Tokyo',
      desc: 'Manager',
    },
  ]

  return (

    <div className="main">
      {
        data.map((i, item) => {
          return (
            <div key={item}>
              <div className="content">
                <img src={i.img} alt="" />
                <h2>{i.heading}</h2>
                <p>{i.desc}</p>
                <button>Join Me</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card;