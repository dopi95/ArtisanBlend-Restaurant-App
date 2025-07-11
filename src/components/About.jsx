function About(){
  return(
    <section className="flex min-h-screen sm:flex-row flex-col-reverse">
      <article className="flex-1 flex px-4 py-5 gap-2">
        <div className="flex flex-col sm:justify-center">
          <img src="images/about-image-1.png" className="w-60 hover:scale-105 transition-all"/>
          <div className="grid place-content-end">
            <img src="images/about-image-4.png" className="w-32 hover:scale-105 transition-all"/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src="/images/about-image-2.png" className="w-64 hover:scale-105 transition-all"/>
          <img src="images/about-image-3.png" className="w-64 hover:scale-105 transition-all"/>
        </div>
      </article>
      <article className="flex-1 flex flex-col justify-center gap-3 px-5">
        <h1 className="text-xl text-gold font-semibold">A BIT</h1>
        <h1 className="text-5xl font-bold">About Us</h1>
        <p>
          Welcome to <span>Artisan Blend Restaurant</span>, where culinary artistry meets unparalleled luxury. We are 
          dedicated to offering an exquisite dining experience, crafting each dish with passion from the finest, freshest 
          ingredients. Indulge in our sophisticated ambiance and impeccable service, designed to create truly memorable 
          moments for every guest.
        </p>
      </article>
    </section>
  )
}

export default About