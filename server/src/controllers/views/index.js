import Path from 'path'

export default {
  index: (req, res) => {
    const location = '../../../../server/public/index.html'
    const htmlFile = Path.join(__dirname, location)
    res.sendFile(htmlFile)
  }
}
