const resume = `Passionate about computer science since I was a child, I’ve decided to expand my know how studying
Information Technology at the High School “ITT G.Giorgi” in Brindisi, certificating as self-student in many CISCO CCNA certificates`

export default function handler(req, res){
    res.status(200).json({resume})
}