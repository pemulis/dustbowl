import React, { Component } from 'react'
import { ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Water</h2>
            <p>Buy precious life-giving Water from ghosts in exchange for Ether, which they can use on the ethereal plane.</p>
            <p><strong>Total Supply</strong>: <ContractData contract="Water" method="totalSupply" /> <ContractData contract="Water" method="symbol" /></p>
            <p><strong>My Balance</strong>: <ContractData contract="Water" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h3>Buy Tokens By Transferring Ether to The WellsFargone Contract Address in MetaMask, Using the Beta UI</h3>
            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
