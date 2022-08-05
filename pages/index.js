import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
         
       <table>
          <tr>
            <th>
              <Image src="/rexume.jpg" alt="logo" width={200} height={200} />
            </th>
            <th>
              <h1>
                <a href="https://www.facebook.com/groups/120876908769/">
                  <Image src="/projectImg.png" alt="facebook" width={50} height={50} />
                </a>
              </h1>
            </th>
            <th>
              <h1>
                <a href="https://www.instagram.com/explore/tags/konradkonrad/">
                  <Image src="/vercel.svg" alt="instagram" width={50} height={50} />
                </a>
              </h1>
            </th>
            <th>
              <h1>
                <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
                  <Image src="/map.png" alt="youtube" width={50} height={50} />
                </a>
              </h1>
            </th>
          </tr>
       </table>

        
  


   </div>
  
  )
}
