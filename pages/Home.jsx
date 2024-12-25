import { Container } from 'postcss'
import React from 'react'
import HomePage from '../src/components/root/HomePage'


function Home() {

    const authStatus = useSelector(state => state.auth.status)

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
                    <Container>
                        <HomePage/>
           
                    {  !authStatus &&  (<div className='flex justify-center items-center max-w-screen-2xl h-full'>

                        <h3 className='text-gray-700 p-4'>please <Link to={"/login"}><span className='text-blue-700'>Login</span></Link> to read blogs</h3>
                    </div>)}

                    </Container>
                
        </section>
    )
}

export default Home