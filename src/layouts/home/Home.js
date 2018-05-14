import React, { Component } from 'react'
import { ContractData } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">

          <div className="pure-u-1-1">
            <h1>Water</h1>
            <p>Buy precious life-giving Water from ghosts in exchange for Ether, which they can use on the ethereal plane.</p>
            <p><strong>Total Supply</strong>: <ContractData contract="Water" method="totalSupply" /> <ContractData contract="Water" method="symbol" /></p>
            <p><strong>My Balance</strong>: <ContractData contract="Water" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h4>Buy Water on Rinkeby by transferring Ether to the WellsFargone address: 0xd4a8e090a71ad937c49e1b53d4812f4e518c5214</h4>
            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
