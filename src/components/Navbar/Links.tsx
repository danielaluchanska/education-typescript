import Link from "./Link"
import { SelectedPage } from "@/shared/types"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <>
    <Link 
    page={"Home"}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Link 
    page={"Benefits"}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Link 
    page={"Classes"}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Link 
    page={"Contact us"}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    </>
  )
}

export default Links