import Header from '../../Header/Header'
import LawyerList from '../../components/LawerList'
function Mediators() {
  return (
    <>
<Header/>
<div className='mediators-main'>
   <div className='container pt-4'>
   <div className='brand_name align-items-start pl-0'>
    <h2 className='text-left'>Mediators Panel</h2>
   </div>
   <div className='mediators-content'>
<LawyerList/>
   </div>
   </div>
</div>
    </>
  )
}

export default Mediators