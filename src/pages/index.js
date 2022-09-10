import React from "react"
import AboutUs from "../components/aboutMe/AboutUs"
import Header from "../components/header/Header";
import Layout from "../components/Layout"
import Projects from "../components/showProjects/Projects";
import Skills from "../components/skills/Skills"
import "../styles/globalStyles.css"

export default function Home() {

  return (
    <>
      <Header />
      <Layout>
        <AboutUs />
        <Skills />
        <Projects />
      </Layout>
    </>
  )
}