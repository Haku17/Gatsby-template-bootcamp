import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2>I am a gatsby homepage! Living on index.js</h2>
      <p>Looking for me? <Link to='/contact'>lets go!</Link></p>
    </Layout>
  )
}

export default IndexPage