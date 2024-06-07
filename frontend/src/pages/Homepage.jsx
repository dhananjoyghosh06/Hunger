import img1 from '../assets/landing.png'
import img2 from '../assets/appDownload.png'
const Homepage = () => {
  return (
    <div className='flex flex-col gap-12 justify-center'>
        <div className='bg-white rounded-lg shadow-md py-8 text-center -mt-16'>
            <h1 className='text-5xl font-bold  tracking-tight text-orange-600'>
                G<span className='text-blue-500 text-10xl'>OO</span>D F<span className='text-blue-500 text-10xl'>OO</span>D  F<span className='text-blue-500 text-10xl'>O</span>R Y<span className='text-blue-500 text-10xl'>O</span>UR EVERYDAY
            </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={img1}/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Order takeway even faster !
                </span>
                <span>
                    Download the Hunger App for faster Ordering and personalised recommendations
                </span>
                <img src={img2}/>
            </div>
        </div>
    </div>
  )
}

export default Homepage