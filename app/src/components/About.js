// /app/src/components/About.js
import React from 'react';
import Card from './Util/Card';
import img1 from '../assets/demo1.png'
import img2 from '../assets/demo2.png'
import img3 from '../assets/demo3.png'
import { useState } from "react";
import DetailCard from './Util/DetailCard';
import '../css/about.css'

const About = () => {
  let [arr, setArr] = useState([
    {
      title: "Assignment 1",
      text: "Introduction of my favourate Genshin Impact character - Hutao",
      image: img1
    },
    {
      title: "Assignment 2",
      text: "self introduction website",
      image: img2
    },
    {
      title: "Assignment 3",
      text: "flex layout",
      image: img3
    }
  ])
  return (
    <>
      <div>
        <Card title="My workshop" content="Here are my past INFO1650 assignment demo." />
        <div className='joblist'>
          {arr.map(e => {
            return (
              <>
                <div>
                  <DetailCard header="My work" title={e.title} text={e.text} image={e.image} />
                </div>
              </>

            )
          })}
        </div>
      </div>
    </>

  );
};

export default About;
