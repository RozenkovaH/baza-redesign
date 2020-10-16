import React from 'react'
import { hot } from 'react-hot-loader/root'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.module.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isNavOpen: false,
    }
    this.openCloseNav = this.openCloseNav.bind(this)
  }

  openCloseNav() {
    if (!this.state.isNavOpen)
      setTimeout(() => { this.setState({ isNavOpen: true }) }, 300)
    else
      setTimeout(() => { this.setState({ isNavOpen: false }) }, 300)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrap}>
          <Header isNavOpen={this.state.isNavOpen} openCloseNav={this.openCloseNav} />
          <Main />
          <Footer />
        </div>
      </div>
    )
  }
}

export default hot(App)
