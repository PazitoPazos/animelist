import Card from './Card'

export default function CardList() {
  const animes = [
    {
      title: 'Jujutsu Kaisen',
      cover:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg',
      href: '#jujutsu-kaisen',
      avgScore: 5,
      year: 2022,
      format: 'TV',
      studios: ['MAPPA'],
      genres: ['Action', 'Drama', 'Supernatural'],
      description: `A boy fights... for "the right death."

Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.

Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.
`,
    },
  ]

  return (
    <section className="relative grid w-full grid-cols-2 place-content-center gap-2 p-4">
      <Card animeInfo={animes[0]} />
      <Card animeInfo={animes[0]} />
      <Card animeInfo={animes[0]} />
      <Card animeInfo={animes[0]} />
    </section>
  )
}
