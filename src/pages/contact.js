import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact</h1>
      <p>Here is how you can contact me!</p>
      <p>+123 045 6789123</p>
      <a href='https://twitter.com' target='_blank' rel="noreferrer">Go to Twitter!</a>
    </Layout>
  )
}

export default ContactPage