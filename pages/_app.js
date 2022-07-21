// import type { AppProps } from 'next/app'
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
// import progress bar from this library to use 
// to show loading while site loads next page
// create new ProgressBar and save to const
// give it desired key/values
// connect it to next.js router
// import Router from next
import Router from 'next/router'
// add Router.events (see below)

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100
})

// 'routeChangeStart' event that tells when page is fired off to server to send a new one
// second argument tells progress const to start
Router.events.on('routeChangeStart', progress.start)
// when route change is over, progress stops too
Router.events.on('routeChangeComplete', progress.finish)
// also finishes when there is an error
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp