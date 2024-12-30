import React from 'react'

import { TimeLineItem } from './TimeLineItem'

export function TimeLine() {
  return (
    <div>
      <TimeLineItem timeDelay={0.1} date={2005} emojis="🇱🇧" content="Born and raised in Lebanon" next={true} future={false}/>
      <TimeLineItem timeDelay={0.2} date={2017} emojis="🇨🇦" content="Moved to Canada" next={true} future={false}/>
      <TimeLineItem timeDelay={0.3} date={2023} emojis="👨‍🎓" content="Graduated high school in Canada" next={true} future={false}/>
      <TimeLineItem timeDelay={0.4} date={2023} emojis="🇱🇧" content="Moved back to Lebanon" next={true} future={false}/>
      <TimeLineItem timeDelay={0.5} date={2024} emojis="👨‍🎓" content="Pursuing BS. Business - Banking & Finance at LAU" next={true} future={false}/>
      <TimeLineItem timeDelay={0.6} date={2025} emojis="👨‍💻" content="Business banking or inventment banking internship?" next={false} future={true}/>
    </div>
  )
}
