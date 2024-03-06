import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nogiBjjPhoto from "../assets/g-liberty.jpg"
import giPhoto from "../assets/hero-bg.jpg"

export default function OurPrograms() {
  return (
    <div className='our-programs-content-wrapper'>
      
        <div className='our-programs-header-container'>
            <h1>Our Programs</h1>
        </div>

        <div className='programs-card-container'>

        {/* <Card style={{ width: '18rem' }}> */}

        <Card className='card-container'>

      <div className='card-img1-container'>
      <Card.Img variant="top" src={nogiBjjPhoto} />
      </div>

      <Card.Body className='card-body'>
        <Card.Title>Adult Nogi</Card.Title>
        <Card.Text>
        NoGi Jiu Jitsu simply means no “Gi” or no traditional kimono uniform. Unlike in Gi, you won’t be taught to grab the uniform at any time to execute moves. Instead, you and your other classmates will wear rash guards and board shorts (think basic surfer attire) and will employ similar classic Brazilian Jiu Jitsu moves in order to escape, block, defend, grab and pin your opponent.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='card-container'>
    <div className='card-img2-container'>
      <Card.Img variant="top" src={giPhoto} />
      </div>
      <Card.Body className='card-body'>
        <Card.Title>Adult Gi</Card.Title>
        <Card.Text>
        In Gi classes you will wear a traditional “Gi” or Jiu Jitsu kimono. You’ll use your skills to overpower opponents and even use their Gi to grab hold and gain the advantage over them. From learning how to escape a hold to how to pin your opponent, this class will give you all the tools you need to grow your Jiu Jitsu skills.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='card-container'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='card-body'>
        <Card.Title>Kids Classes</Card.Title>
        <Card.Text>
        Our kids classes are broken into two separate age groups: ages 5-8 and ages 9-12. Both groups start out slowly and safely and our instructors, trained in teaching youth, will walk them through the fundamentals of Brazilian Jiu Jitsu. It’s a great way to naturally build self-esteem, self-respect, patience and problem-solving skills in kids — in a very fun way. We make our classes safe, fun and approachable so students will enjoy being in class every week as they learn and progress.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='card-container'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='card-body'>
        <Card.Title>Women's Introductory Lessons</Card.Title>
        <Card.Text>
        Brazilian Jiu Jitsu is most certainly not just for the guys. Women can benefit from the many perks of the practice, including weight loss, stress relief, self defense skills and body confidence. Women aren’t often encouraged to grapple or be aggressive in our everyday life. Here in our classes, we shed those gender roles and give you the techniques to dominate your opponent AND your life. Come give us a try!
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    </div>


    </div>
  )
}

