import { SelectedPage, BenefitType} from '@/shared/types'
import { motion } from 'framer-motion' 
import {benefits} from '@/shared/benefits'
import HText from '../HText/HText'
import Benefit from './Benefit'
import BenefitsPeople from '@/assets/BenefitsPeople.png'
import BenefitsPeople2 from '@/assets/BenefitsPeople2.png'
import ActionButton from '../ActionButton/ActionButton'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

<motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A CLASS.</HText>
          <p className="my-5 text-sm">
          Our website provides a wide range of educational classes catering to various interests and skill levels, ensuring that learners can find courses that align with their passions and goals.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div  className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
        <motion.div>
        <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
<img className='mx-auto' alt='benefits-photo' src={BenefitsPeople2} />
</div>

</div>
</motion.div>
<motion.div     initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
   <HText>
                    HUNDREDS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">SMARTER</span>
                  </HText>

              <p className="my-5">
              Enjoy the flexibility of online learning, allowing you to access course materials and participate in classes from anywhere with an internet connection, enabling you to learn at your own pace and on your own schedule.
              </p>
              <p className="mb-5">
              Join a supportive community of fellow learners, where you can connect, collaborate, and exchange ideas with like-minded individuals, creating a valuable network of peers and mentors to support you throughout your educational endeavors.
              </p>
           
              <motion.div     initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2,duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
                </motion.div>
            </motion.div>
        </div>
         
</motion.div>
    </section>
  )
}

export default Benefits