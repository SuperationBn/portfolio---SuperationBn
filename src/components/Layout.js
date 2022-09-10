import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>SuperationBn - Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="author" content="Estiven - SuperationBn" />
        <meta name="description" content='I am a web programmer specialized in the construction of static and dynamic sites, I use knowledge of various technologies related to fontend.' data-react-helmet="true" ></meta>
        <meta name="keywords" content="Frontend Developer, Open Source, Desing Gatsby, React, SuperationBn"></meta>

        <meta property="og:title" content="SuperationBn - Frontend developer" data-react-helmet="true"></meta>
        <meta property="og:description" content='I am a web programmer specialized in the construction of static and dynamic sites, I use knowledge of various technologies related to fontend.' data-react-helmet="true"></meta>
        <meta property="og:type" content="website" data-react-helmet="true"></meta>
        <meta name="image" content="https://photos.google.com/photo/AF1QipNaIrs-4CpEor1x3cKF-E105tAlLbdyFgAwkJ3q" data-react-helmet="true"></meta>

        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
      {/* <Header /> */}
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
