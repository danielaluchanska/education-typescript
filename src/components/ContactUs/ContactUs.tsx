import { SelectedPage } from '@/shared/types'
import { triggerAsyncId } from 'async_hooks';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form';
import HText from '../HText/HText';
import PeopleForm from '@/assets/PeopleForm.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

  const {
    register,
    trigger, 
    formState: {errors}
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }

const inputStyles = ' mt-5 w-full rounded-lg bg-primary-100 px-5 py-3 placeholder-white'
  return (
    <section id="contactUs" className="mx-auto min-h-full w-5/6 py-0">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
      <motion.div className='md:w-3/5'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}>
                <div className="relative">
              <div className="before:absolute before:-top-20 before:-right-20 before:z-[1] before:content-abstractwaves">
<HText> <span className= "text-secondary-500">JOIN NOW</span> {' '} TO UPGRADE YOUR SKILLS </HText>
</div>
</div>
<p className='my-5'> with our dynamic classes. Whether you're a beginner or advanced learner, our diverse curriculum caters to all levels, helping you thrive in your educational journey.</p>
      </motion.div>
      <div className='mt-10 justify-between gap-8 md:flex'>
        <motion.div className='mt-10 basis-3/5 md:mt-0' 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, y: 50 },
           visible: { opacity: 1, y: 0 },
         }}
        >
<form 
target="_blank"
onSubmit={onSubmit}
action="https://formsubmit.co/ 4777553a9580776012f469661d569049"
method="POST">
  <input 
  className={inputStyles}
  type='text'
  placeholder='NAME'
  {...register("name", {
    required: true,
    maxLength: 100,
  })}
  />
  {errors.name && (
    <p className='mt-1 text-primary-500 '>
      {errors.name.type === 'required' && "This Field is required"}
      {errors.name.type === 'maxLength' && "Max length is 100 char"}

    </p>
  )}
  <input 
  className={inputStyles}
  type='text'
  placeholder='EMAIL'
  {...register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  })}
  />
  {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
   <textarea 
  className={inputStyles}
  rows={4}
  cols={50}
  placeholder='MESSAGE'
  {...register("message", {
    required: true,
    maxLength: 3000,
  })}
  />
  {errors.message && (
    <p className='mt-1 text-primary-500 '>
      {errors.message.type === 'required' && "This Field is required"}
      {errors.message.type === 'maxLength' && "Max length is 3000 char"}

    </p>
  )}
   <div className="relative">
              <div className="before:absolute before:-bottom-20 before:right-0 before:z-[-1] before:content-sparkles">
  <button type="submit"
  className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition-duration-500 hover:text-white'>
    SUBMIT
  </button>
  </div>
  </div>
</form>
        </motion.div>
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}> 
  <div className="relative">
  <div className='md:before:content-evolvetext w-full before:absolute before:bottom-20 before:-left-80 before:z-[-10] '>
  <img alt='people-img' src={PeopleForm}/>
  </div>
  </div>
 
</motion.div>
      </div>

    </motion.div>
    </section>
  )
}

export default ContactUs