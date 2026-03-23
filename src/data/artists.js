import artistSingerImage from '../assets/images/site/team-creative-director.jpg'
import artistDjImage from '../assets/images/site/team-marketing.jpg'

export const artists = [
  {
    id: 1,
    name: 'Artist Name',
    category: 'Music',
    genre: 'Indie / Pop',
    bio: 'A passionate musician creating original compositions and background scores.',
    image: artistSingerImage,
    tracks: [],
    platforms: {
      spotify: 'https://open.spotify.com',
      youtube: 'https://www.youtube.com',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    id: 2,
    name: 'DJ Name',
    category: 'Disk Jockey',
    genre: 'EDM / Bollywood',
    bio: 'High energy DJ available for weddings, corporate events and concerts.',
    image: artistDjImage,
    tracks: [],
    platforms: {
      instagram: 'https://www.instagram.com',
      youtube: 'https://www.youtube.com',
    },
  },
]
