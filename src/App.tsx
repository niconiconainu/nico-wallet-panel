import './App.css'
import { dummyAddress } from './dummy/dummyAddress'
import { dummyTokens } from './dummy/dummyTokens'
import WalletPanel from './WalletPanel'

function App() {
  return (
    <>
      <WalletPanel address={dummyAddress} onDisconnect={() => {}} tokens={dummyTokens}></WalletPanel>
    </>
  )
}

export default App
