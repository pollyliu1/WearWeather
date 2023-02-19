import Head from 'next/head'
import Wardrobe from './wardrobe'
import Info from './info'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image'
import hangers from './images/hangers.png'
import { motion } from 'framer-motion';
import clothes from './images/clothes.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
    <div className='section'>
      <Head>
        <title>WeatherWear</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      
      <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.15
        }
      },}}>
      <div className ='container'>
        <div className='home-text'>
          <h1 className={styles.title}>WeatherWear</h1>
          <p className='home-description'>the bridge between style and comfort.</p>
        </div>
        <div className='hangers'>
            <Image src={hangers}
              width={400}>
            </Image>
          </div>
      </div>
      </motion.div>
    </div>
    
      <div className='about' data-aos="fade-in">
        <h1 className='about-title'>Get started with WeatherWear</h1>
        <p className='caption'>an AI powered assistant to help generate clothing recommendations based on today's weather.</p>
        <p className='about-info'>Just enter information about your gender, style, and location and WeatherWear will generate outfits that will make you feel <span class="bold"> empowered</span> and ready for <span class="bold">whatever weather, whenever.</span> </p>
        <p className='about-info'>Feel the change in your everyday life, starting today, with WeatherWear. </p>
        <div className='clothes'>
            <Image src={clothes}
              width={400}>
            </Image>
          </div>
      </div>
    </>
  )
}


