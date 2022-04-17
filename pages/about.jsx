import Image from 'next/image'

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <main className="mx-auto mt-16 flex w-full max-w-2xl flex-col items-start justify-center px-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-black">
          About Soham 📝
        </h1>
        <div className="my-8">
          <Image
            alt="Soham Parmar"
            src="/SohamParmarFull.jpg"
            width={3024 / 10}
            height={4032 / 10}
            className="rounded-xl"
            priority
          />
        </div>
        <div className="mt-8 mb-8 leading-6">
          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-bold">Intro</h2>
            <p>
              I am a 1st year undergraduate student at the University of
              Waterloo. I am currently a candidate for a Bachelor's in Applied
              Sciences with a major in Computer Engineering.
            </p>
          </div>
          <div className="mt-8 leading-6">
            <h2 className="mb-4 text-2xl font-bold">Some History</h2>
            <p className="mb-2">
              My name is Soham. I am 18 and currently attend Post-Secondary at
              the University of Waterloo. My passions range from a wide variety
              of interests, but most significantly focus on ideas in science,
              engineering and business.
            </p>
            <p className="mb-2">
              I come from an “Indo-Canadian” cultural background. My dad was
              born in Canada and is a first generation Indo-Canadian and my mom
              was born in India. This combination of western and Indian cultures
              has given me the best of both worlds. I enjoy the diverse Indian
              and the Canadian cuisines, and my vacationing experiences in
              different parts of India and Canada have made me appreciate the
              cultures of both worlds.
            </p>
            <p className="mb-2">
              I tend to be very curious by nature, which means I can’t easily do
              nothing productive in my time. What I mean by this is I try to
              have something to do and put my mind towards whenever I have free
              time. Usually this thing is something of a hobby, or some goal I
              have set. More recently these have actually been related to
              engineering, on the computer side of things. For example, I enjoy
              tinkering with a Raspberry Pi that I have. I use this to practice
              my programming and practical experience.
            </p>
            <p className="mb-2">
              I really love the game of basketball 🏀. Be it watching the NBA,
              playing a pick-up game or just shooting around – I fully enjoy it.
              There is something gratifying about putting down your books,
              clearing your mind, and just dedicating yourself to the game. I’ve
              never been a superb player, nor have I been on a competitive team;
              nevertheless, I always gain an unmatched sense of freedom from
              playing, no matter how well I play. Arguably one of the most
              exciting parts of playing basketball is being able to play with my
              friends. It provides me with a way to connect with others
              actively, and all you need is each other, a ball, and a hoop. Even
              with such fruitful emotions, I can never pinpoint exactly what the
              manner is by which I achieve such joy. Is it the dynamic gameplay,
              the absence of stress, the sense of belonging? I don’t know, but
              regardless, this feeling is untouched by anything else.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
