function Footer(){
  const today = new Date();
  const hours = today.getHours();
  const currentYear = today.getFullYear();
  return (
    <footer className="px-4 py-2 absolute w-full bg-white dark:bg-gray-900 dark:text-white">
      <section className="flex md:flex-row flex-col gap-2">
        <article className="flex-1">
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7478907522877!2d36.84997537372774!3d-1.3272411356696567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117acdcb2ed5%3A0xb9292d5431ba196b!2sArtisan%20Blend%20Cafe!5e0!3m2!1sen!2srw!4v1752148523638!5m2!1sen!2srw" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
        <article className="flex-1 flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold">Get In Touch With Us</h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 p-4 gap-x-5 gap-y-6">
            <div className="flex flex-col items-center justify-center">
              <img src="icons/icons8-address-50.png" className="w-12"/>
              <h2 className="text-xl text-slate-950 dark:text-white font-semibold">Address:</h2>
              <address className="text-center">
                <span className="whitespace-nowrap text-nowrap text-xl">Artisan Blend Cafe,</span><br/>
                <span className="whitespace-nowrap text-nowrap text-xl">Mombassa Road, Nairobi,</span><br/>
                <span className="whitespace-nowrap text-nowrap text-xl">Kenya</span>
                </address>
            </div>
            <div className="flex flex-col items-center ">
              <img src="icons/icons8-watch-50.png" className="w-12"/>
              <h2 className="text-xl text-slate-950 dark:text-white font-semibold">Opening Hours:</h2>
              <p>
                <span className="text-nowrap whitespace-nowrap text-xl"><time>8:00 AM</time> - <time>5:00PM</time> daily</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="icons/icons8-at-50.png" className="w-12"/>
              <h2 className="text-xl text-slate-950 dark:text-white font-semibold">Email-Us:</h2>
              <a href="mailto:info@artisanblend.com" className="text-xl hover:opacity-90">info@artisanblend.com</a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="icons/icons8-call-50.png" className="w-12"/>
              <h2 className="text-xl text-slate-950 dark:text-white font-semibold">Call-Us:</h2>
              <a href="tel:+254728777119" className="text-xl hover:opacity-90">+254728777119</a>
            </div>
          </div>
        </article>
      </section>
      <section className="flex md:flex-row flex-col py-2 gap-2">
        <div className="flex-1 grid place-content-center">
          {hours < 17 ? 
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-xl text-green-500 font-bold">Opened</p>
            </div> : 
            <div className="flex items-center gap-1">
              <div><img src="icons/icons8-lock-30.png" className="w-5 animate-pulse"/></div>
              <p className="text-xl text-orange-500 font-bold">Closed</p>
            </div>
          }
        </div>
        <article className="flex flex-col justify-center items-center flex-1">
          <p className="text-xl font-bold">Artisan Blend</p>
          <ul className="flex gap-6">
            <li><a href="https://facebook.com" target="_blank"><img src="icons/icons8-facebook-logo-35.png"/></a></li>
            <li><a href="https://instagram.com" target="_blank"><img src="icons/icons8-instagram-logo-35.png"/></a></li>
            <li><a href="https://x.com" target="_blank"><img src="icons/icons8-twitter-logo-35.png"/></a></li>
            <li><a href="https://youtube.com" target="_blank"><img src="icons/icons8-youtube-logo-35.png"/></a></li>
          </ul>
        </article>
        <p className="flex-1 flex justify-center items-center">&copy;{currentYear}  Artisan Blend All rights reserved.</p>
      </section>
    </footer>
    )
}

export default Footer