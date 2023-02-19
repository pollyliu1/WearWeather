import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Wardrobe.module.css'
import dressPic from './images/dress.jpg'
import React from 'react'
import FetchPinterest from '../components/Puppeteer'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Wardrobe() {
  return (
    <>
      <FetchPinterest />
      <Head data-aos="fade-in">
        <title>Choose Your Wardrobe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      
      <div className={styles.body}>
        <div className="card-style">
      <Card>
        <div className={styles.sidebar}>
          <h1 className={styles.title}>Today's Outfit</h1>
          <h4 className={styles.intro}>Enter your information below:</h4>
          <form action='' method='GET' className={styles.form}>
            <div className={styles.question}>
              <label className={styles.label}>Gender: </label>
              <input type='text' className={styles.input} id='gender' name='gender' autoComplete='off'></input>
            </div>

            <div className={styles.question}>
              <label className={styles.label}>Location: </label>
              <input type='text' className={styles.input} id='location' name='location' autoComplete='off'></input>
            </div>
            
            <div className={styles.question}>
              <label className={styles.label}>Style: </label>
              <input type='text' className={styles.input} id='style' name='style' autoComplete='off'></input>
            </div>

            <Button className={styles.btn} type="submit">Generate Outfit</Button>
          </form>

          <p className={styles.weather}>Weather: </p>
          <p className={styles.weather}>Temperature:</p>
          <p className={styles.weather}>Winds:</p>
        </div>
        </Card>
        </div>
        
          <div className='outfit'>
            <img></img>
            <p className={styles.intro}>Outfit</p>
            <Image src={dressPic}
              width={200}>
            </Image>
          </div>
        
      </div>
    </>
  )
}