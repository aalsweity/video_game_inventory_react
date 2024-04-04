import Background from '../assets/video_game_room.png'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-75 text-black rounded'>Game Inventory by Anas Al-Sweity</h3>
        </div>
    </div>
  )
}

export default Home