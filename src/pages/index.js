import * as React from "react"
import Layout from '../components/layout';
import Card from '../components/card'


export default function Home() {


  return (
    <Layout>
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-center">
          Hi, I'm Hamza. I'm a third year Student at Zewail City in Egypt.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          
          <li>  <a href="#" className="text-blue-400 hover:text-blue-500">
          Full Stack Web Dev
          </a></li>
          <li>  <a href="#" className="text-blue-400 hover:text-blue-500">
          Digital Signal Processing
          </a></li>
          <li>  <a href="#" className="text-blue-400 hover:text-blue-500">
          Automation Scripts
          </a></li>

        </ul>

      </section>
      <h2 className="text-4xl font-bold  mb-4">Recent Projects</h2>
      <div class="flex justify-center">
      <div class="bg-white shadow-md rounded-lg p-6 m-4">

        <Card
        title={'ESP Voice Controlled Vehicle'}
        description={'Using the ESP 32 microcontroller, firebase RTDB and MIT app inventor we created a voice controlled toy vehicle'} 
        src='/esp_car.png'
        tags={['esp','electronics']}
        />

      </div>
      <div class="bg-white shadow-md rounded-lg p-6 m-4">
      <Card
        title={'Torrent Network Analysis'}
        description={'Crawled torrent network to fetch all working peers and seed. Modeled network as a graph and perform graph algorithms like page ranks and paths.'} 
        src='/torrent_network_analysis.png'
        tags={['Data Structure','Graph theory']}
        />
      </div>
    </div>
    <a href="/library">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block">
  More
</button>
</a>
<h2 className="text-4xl font-bold  mb-4">Compeitions</h2>
Nope not yet
<h2 className="text-4xl font-bold  mb-4">Awards & Certificates</h2>
Nope not yet

    </div>
  </Layout>
  )
}
