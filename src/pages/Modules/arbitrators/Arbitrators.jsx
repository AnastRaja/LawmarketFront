import Header from '../../Header/Header'
import LawyerList from '../../components/LawerList'
function Arbitrators() {
  return (
    <>
      <Header />
      <div className='mediators-main'>
        <div className='container pt-4'>
          <div className='brand_name align-items-start pl-0'>
            <h2 className='text-left'>Arbitrators & Mediators Panel</h2>
          </div>
          <div className='mediators-content'>
            <LawyerList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Arbitrators