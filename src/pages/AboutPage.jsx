import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>AboutThisProject</h1>
        <p>This a react page mane</p>
        <p>V1.0 BayBeeee</p>

        <p>
          <Link to='/'>Back to Home Slime</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage