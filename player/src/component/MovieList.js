import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'


export default function MovieList({movies , input, ratingg}) {

    const deleteMovie=(id)=>{
        movies.map((el)=>{
          if (id === el.id){
            movies.splice(id,1)
          }
        })
    }
  return (
    
      movies
      .filter((el)=>(
        el.name.toLowerCase().includes(input.toLowerCase()) && el.rating >= ratingg
      ))
      .map((el,index)=>
      <Card style={{ width: '18rem' }} key={el.index}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.description}
        </Card.Text>
        <Button variant="primary" onClick={deleteMovie}>delete</Button>
        <ReactStars
    count={5}
    value={el.rating}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />
      </Card.Body>
    </Card>
      )
  )
}
