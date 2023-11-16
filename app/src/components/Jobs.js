// /frontend/src/components/Jobs.js
import React from 'react';
import Card from './Card';
import img1 from '../assets/elephant-1.jpeg'
import img2 from '../assets/elephant-2.jpeg'
import img3 from '../assets/elephant-3.jpeg'
import { useState } from "react";
import DetailCard from './DetailCard';
import '../css/jobs.css'


const Jobs = () => {
  let [arr, setArr] = useState([
    {
      title: "job 1",
      text: "TA of INFO1650",
      image: img1
    },
    {
      title: "job 2",
      text: "TA of CSYE6200",
      image: img2
    },
    {
      title: "job 3",
      text: "Head Master of Northeastern University",
      image: img3
    }
  ])

  return (
    <div>
      <Card title="Join Our Team" content="Explore exciting career opportunities with us." />

      <div className='worklist'>
        {arr.map(e => {
          return (
            <>
              <div>
                <DetailCard header="Job Opportunities" title={e.title} text={e.text} image={e.image} />
              </div>
            </>

          )
        })}
      </div>
    </div>
  );
};

export default Jobs;
