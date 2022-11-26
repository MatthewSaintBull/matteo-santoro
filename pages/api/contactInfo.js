const contactInfo = {
    email: 'm.santoro1997@gmail.com',
    linkedin: '/in/matteo-santoro',
    github: 'MatthewSaintBull',
    instagram: 'matteo_santoro_97'
}

export default function handler(req, res) {
    res.status(200).json(contactInfo)
}