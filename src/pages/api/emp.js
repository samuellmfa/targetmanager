import Cookies from 'cookies'
import clientPromise from "../../../lib/mongodb";
const {createHash} = require('node:crypto');

export default async function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }