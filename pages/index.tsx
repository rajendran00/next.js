import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CreateResume from './createResume'
import Resume from './resume'

const Home: NextPage = () => {
  return (
    <Resume />
  )
}

export default Home
