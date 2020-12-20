import '../styles/globals.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false 

// Add icons and packages you will use in multiple components
library.add(fab)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
