import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <div className='w-full h-screen '>
        <Image src="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/10/Flipkart-Big-Billion-Days-Sale-2021-630-Featured.jpeg" 
          alt='Home image' width={0} height={0} className='w-full h-full' sizes='100vw'
        />
      </div>
    </div>
  )
}
