import React from 'react'

import { TimeLineItem } from './TimeLineItem'

export function TimeLine() {
  return (
    <div>
      <TimeLineItem timeDelay={0.1} date={2002} emojis="🇱🇧" content="Born and raised in Lebanon" next={true} future={false}/>
      <TimeLineItem timeDelay={0.2} date={2017} emojis="🇨🇦" content="Moved to Canada" next={true} future={false}/>
      <TimeLineItem timeDelay={0.3} date={2020} emojis="👨‍🎓" content="Graduated high school" next={true} future={false}/>
      <TimeLineItem timeDelay={0.4} date={2023} emojis="👨‍🎓" content="Graduated with BSc. Computer Science degree" next={true} future={false}/>
      <TimeLineItem timeDelay={0.5} date={2024} emojis="👨‍💻" content="Employed Cybersecurity Consultant at Deloitte" next={false} future={false}/>
    </div>
  )
}
