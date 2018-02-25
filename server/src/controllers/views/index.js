import Path from 'path'

export default {
  /**
   * Controller action to render the single view
   * @param {object} req - The request object from express
   * @param {object} res - The response object to send responses through
   */
  index: (req, res) => {
    const location = '../../../../server/public/index.html'
    const htmlFile = Path.join(__dirname, location)
    res.sendFile(htmlFile)
  }
}
