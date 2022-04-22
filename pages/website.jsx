import Image from 'next/image'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const technologies = [
  {
    name: 'React',
    use: 'Library',
    description: `It should come with little surprise that React is used 
    as the client side JS library for this website. Component views and 
    efficient state management with automated rerendering were nobrainer 
    reasons for choosing this library as I wanted to minimize overhead as 
    much as possible. Moreover, it is the JS library I am most familiar 
    with - so it seems to be the best option (for now).`,
  },
  {
    name: 'Next.js',
    use: 'Framework',
    description: `I've come to have Next.js at the front of my mind whenever 
    I intend on create any sort of non-SPA based website. I've come to make 
    React the optimal choice for web development for myself - but it is not 
    without flaws on its own. A lot of features come out of the box with 
    Next.js that you would normally have to manually configure - such as 
    server side rendering, JS bundling, routing, and more. I would much rather 
    use a framework like Next.js to enjoy complex features like that with little 
    headache.`,
  },
  {
    name: 'Tailwind & Material UI',
    use: 'Styling',
    description: `I had a decision before I started building the website that 
    is very crucial to the feel of the website as well as my sanity for when 
    I completed the site. I knew from the jump that I did not want to just use 
    raw CSS - primarily because I wanted to challenge myself to use new tools 
    and make the burden of styling easier. I had a goal in mind when selecting 
    Tailwind CSS, and that was to avoid unnecessary complexity. I decided against 
    using any preprocessor like Sass since it would likely be too overkill for 
    this. I ended up deciding upon Tailwind just because of how easy it is to 
    style components right in jsx files and how simple breakpoint changes are to 
    implement. I also used Mui for premade components that I have little interest 
    in creating manually - such as the accordion you are reading from right now :)`,
  },
  {
    name: 'Vercel',
    use: 'Deployment',
    description: `Vercel seemed like the appropriate choice for hosting and deployment 
    for this web app, given that it fell in line with my principle of little 
    configuration. Seeing that Vercel is the creator and maintainer of Next.js, it is 
    evident that deploying a Next.js app on a serverless Vercel service would be simple. 
    Vercel is akin to App Engine for GCP and Elastic Beanstalk for AWS. Moreover, Vercel 
    offers out-of-the-box CI/CD with automatic deployment in response to GitHub pushes.`,
  },
  {
    name: 'GitHub',
    use: 'Code Hosting and Versioning',
    description: `With any modern project - it is arguably naive to not choose a verionsing 
    system like Git and a source code hoster like GitHub. Especially since I intend to make 
    changes to the site as time goes on, it is crucial that there is a robust VCS that exists 
    as a backbone for the project. Moreover, the integration with Vercel for automatic 
    deployments streamlines work significantly.`,
  },
]
export default function Website() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-8 pb-20">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          About This Website 💻
        </h1>
        <div className="mb-8 leading-6">
          <div>
            <h2 className="text-2xl font-bold">Why did I create this?</h2>
            <p>
              Whether you are enthusiastic about software development or not - I
              believe a personal website is a powerful tool to show off your
              skills and accomplishments to the anyone who is interested and may
              be willing to connect with you. Having an online presence in the
              digital age is a must in my opinion.
            </p>
          </div>
          <div className="leading-6">
            <h2 className="text-2xl font-bold">Previous Attempt</h2>
            <p>
              Early 2020, I attempted my first shot at making a personal
              portfolio website. I used my knowledge of React and barebones CSS
              to make a static website which I could use to begin my online
              presence professionally.
            </p>
            <div className="my-8">
              <Image
                alt="Old Soham Parmar Website"
                src="/OldWebsite.png"
                width={1546}
                height={799}
                className="rounded-xl"
                priority
              />
            </div>
            <p className="mb-4">
              While this suited my needs at the time - there were a lot of
              reasons that ended up pushing me to create an entirely new site.
            </p>
            <ul className="italic">
              <li className="list-disc">
                Was hosted on Heroku via Git and had an atrocious load time
              </li>
              <li className="list-disc">
                Completely static site with little to no responsiveness and
                dynamic content
              </li>
              <li className="list-disc">
                Did not fit very well within my vision of minimalism and modern
                design principles
              </li>
              <li className="list-disc">
                Tech stack was very barebones and not very challenging
              </li>
              <li className="list-disc">
                Overall felt like a glorified PDF file
              </li>
            </ul>
          </div>
          <div className="leading-6">
            <h2 className="text-2xl font-bold">This Website</h2>
            <p className="mb-4">
              This website is custom coded using the technologies and frameworks
              listed below. My goal when building this site was to pick
              technologies with a lot of "out-of-the-box" functionality which
              would allow me to create and host the site with minimal overhead
              and configuration.
            </p>
            <div>
              {technologies.map((technology) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p className="mb-2">
                      <strong className="italic">{technology.name}</strong> -{' '}
                      {technology.use}
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>{technology.description}</p>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="leading-6">
            <h2 className="text-2xl font-bold">Upcoming</h2>
            <p className="mb-4">
              Here are some things I hope to add to the website in the future!
            </p>
            <ul className="italic">
              <li className="list-disc">
                This website is a little too minimal - I want to add some more
                CSS magic 🪄
              </li>
              <li className="list-disc">
                A blog connected to a backend database like Firestore or
                Postgres 📝
              </li>
              <li className="list-disc">
                Connect Google Analytics to display page visits for anyone to
                see 📈
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
