import AllCourses from "../components/home/AllCourses"
import Hero from "../components/home/Hero"
import Queries from "../components/home/Queries"
import Teachers from "../components/home/Teachers"



function Home() {
  return (
    <div>
       <Hero/>
       <AllCourses/>
       <Queries/>
       <Teachers/>
    </div>
  )
}

export default Home