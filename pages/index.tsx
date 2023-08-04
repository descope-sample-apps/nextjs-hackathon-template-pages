import Intro from '../components/Intro'
import Facts from '../components/Facts'
import About from '../components/About'
import Speakers from '../components/Speakers'
import FAQ from '../components/FAQ'
import Sponsors from '../components/Sponsors'
import Schedule from '../components/Schedule'

import { ScheduleList } from '../template_data/Schedule'
import { SpeakerList } from '../template_data/Speakers'
import { SponsorList } from '../template_data/Sponsor'
import { FAQList } from '../template_data/FAQ'
import { AboutParagraph } from '../template_data/About'

import AboutImage from "../assets/about/umberto-deb2EnbWPr8-unsplash.jpg"


export default function Home() {
  return (
    <div className='page h-full'>
      <div className='w-[90%]'>
        <Intro />
        <Facts />
        <About data={AboutParagraph} AboutImage={AboutImage.src} />
        <Schedule data={ScheduleList} />
        <Speakers data={SpeakerList} />
        <Sponsors data={SponsorList} />
        <FAQ data={FAQList} />
      </div>
    </div>
  )
}
