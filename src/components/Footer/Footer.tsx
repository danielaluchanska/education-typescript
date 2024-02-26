import HomePageLogo from "@/assets/HomePageLogo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-10">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img className="h-24 w-28" alt="logo" src={HomePageLogo} />
        <p className="my-5">
        Learners come together to explore a diverse array of classes, from mathematics to music theory. Join our vibrant community today and embark on a journey of discovery and growth..
        </p>
        <p>© EDUCATION All Rights Reserved.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Our Classes</p>
        <p className="my-5">Educators</p>
        <p>Learn more</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Sofia 1000, Bulgaria </p>
        <p>+(359)898-425-825</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer