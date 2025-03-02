import Header from './components/header'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'

function App() {
  return (
    <>
     <Header />
     <About />
     <div className='gallery container d-xxl-flex d-xl-flex d-lg-flex border-bottom border-info'>
          <Gallery 
          title='First project' 
          description="My first project was a restaurant website, 
          I made it with HTML,CSS and JS and I have a friend made 
          Its backend with Django, We made order system and dash board 
          to know the daily payments and the best selling meal." 
          github="https://github.com/Ezzeldeentantawy/Layali-elhelmia"
          descriptionnd="I made it again when i learned react & laravel"
          githubnd='https://github.com/Ezzeldeentantawy/layali-elhelmia-React'
          />
          <Gallery 
          title='Second Project'
          description="This is the second project, I still working on it , It will be like a miniature version 
          of notion"
          />
     </div>
     <Skills />
    </>
  )
}

export default App
