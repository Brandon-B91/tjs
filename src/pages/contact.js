import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'

const contact = () => {
  return (
    <Layout>
      <Seo title="contact" />
      <div class="contact">
        <h3>Hours of operation</h3>
        <ul>
          <li>Monday - Friday 10:00 Am - 5:30 Pm</li>
          <li>Saturday 10:00 Am - 5:00 Pm </li>
          <li>Sunday Closed </li>
        </ul>
        <form name="contac" netlify>
        <h4 style={{textAlign: 'center', marginTop: '1%'}}>Have a question? <br /> Feel free to reach out to us!</h4>
          <p>
            <label>
              Name: <input type="text" name="name" required placeholder="John Smith"/>
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" required placeholder="JohnSmith123@null.com"/>
            </label>
          </p>
          <p>
            <label>
              Question: <input type="textarea" name="email" required placeholder="How can we help!"/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <cite style={{color: 'red', fontSize: '10px', marginLeft: '0'}}> Please note all fields required...</cite>

        </form>
      </div>
    </Layout>
  )
}

export default contact
