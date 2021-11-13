// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider >
          <Component {...pageProps} />
      </ChakraProvider>
)}

export default MyApp
