import React from 'react'
import { TimeLine } from './timeLine/TimeLine'
import ScrollableBox from './ScrollableBox';

function Experience() {
  return (
    <div>
      <h2 className='mb-6 font-medium '>Time Line</h2>
      <ScrollableBox>
      <TimeLine />
      </ScrollableBox>
        
    </div>
  )
}

export default Experience
