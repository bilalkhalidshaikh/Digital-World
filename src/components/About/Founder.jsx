import React from 'react'
import {Container,CardGroup, Card} from "react-bootstrap"

export default function Founder() {
  return (
    <div style={{textAlign:'center'}}>
    <Container>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://themezinho.net/sreative/images/team-member1.jpg" />
    <Card.Body>
      <Card.Title>David Coopperfield</Card.Title>
      <Card.Text>
      Front-End Developer
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src="https://themezinho.net/sreative/images/team-member3.jpg" />
    <Card.Body>
      <Card.Title>George Levinstain</Card.Title>
      <Card.Text>
      Creative Director

      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src="https://themezinho.net/sreative/images/team-member2.jpg" />
    <Card.Body>
      <Card.Title>Mike Russel</Card.Title>
      <Card.Text>
    Senior Copywriter
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardGroup>
    </Container>
    
    </div>
  )
}
