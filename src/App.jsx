import Header from "./components/Header"
import Entry from "./components/Entry"
// import photo1 from "./assets/1.jpg"
import './App.css'

function App() {
  return (
    <>
      < Header />
      < Entry 
          img={{
              src:"src/assets/1.jpg", 
              alt:"lizard in the atacama dessert"
          }}
          location="Chile"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Black-spotted Lizard"
          dates="September 2018"
          description="Liolaemus nigromaculatus is a species of lizard that belongs to the family Liolaemidae. This species is part of a large and diverse group of lizards found in South America, particularly in Argentina and Chile. The species is characterized by its distinctive color pattern, which includes black spots or markings on its body, hence the name nigromaculatus, meaning black-spotted in Latin"
      />
      < Entry 
          img={{
              src:"src/assets/2.jpg", 
              alt:"Starling"
          }}
          location="UK"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Starling"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/3.jpg", 
              alt:"Green turtle"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Green Turtle"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/4.jpg", 
              alt:"Toad"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Toad"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/5.jpg", 
              alt:"Coati"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Coati"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/6.jpg", 
              alt:"Lizard"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Microlophus"
          dates="July 2018"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/7.jpg", 
              alt:"New world vulture"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="New world vulture"
          dates="August 2018"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/8.jpg", 
              alt:"Toucan"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Toucan"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/9.jpg", 
              alt:"Starling"
          }}
          location="Brazil"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Corvidae"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
      < Entry 
          img={{
              src:"src/assets/10.jpg", 
              alt:"Starling"
          }}
          location="UK"
          map="https://www.google.com/maps/place/Iguazu+Falls/@-25.6911388,-54.4410539,15z/data=!3m1!4b1!4m6!3m5!1s0x94f6ea7339e748e7:0x1c851fea816c962f!8m2!3d-25.690864!4d-54.4408161!16s%2Fg%2F11bw1_75m5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          name="Chinese Duck"
          dates="July 2020"
          description="Starlings are small to medium-sized passerine birds known for the often dark, glossy iridescent sheen of their plumage; their complex vocalizations including mimicking; and their distinctive, often elaborate swarming behavior, known as murmuration"     
      />
    </>
  )
}

export default App
