import React from 'react'
import Card from '../components/card'; // Assuming Card component is defined in Card.js
import Layout from '../components/layout';

const projects = [
    {
      title: 'ESP Voice Controlled Vehicle',
      description: 'Using the ESP 32 microcontroller, firebase RTDB and MIT app inventor we created a voice controlled toy vehicle',
      src: '/esp_car.png',
      tags: ['electronics', 'IoT','Firebase']
    },
    {
      title: 'A Hexa-Band Quad-Circular-Polarization Slotted Patch Antenna for 5G, GPS, WLAN, LTE, and Radio Navigation Applications',
      description: 'Using CST we simulated a micropatch atenna and analysed some antenna parameters like, S-paramters, Farfield and current density.',
      src: '/antenna.png',
      tags: ['Simulation', 'CST Studio', 'RF']
    },
    {
      title: 'Torrent Network Analysis',
      description: 'Crawled torrent network to fetch all working peers and seed. Modeled network as a graph and perform graph algorithms like page ranks and paths.',
      src: '/torrent_network_analysis.png',
      tags: ['Graph theory', 'Network']
    },
    {
      title: 'QR Code Based Treasure Hunt Game',
      description: 'Built a website with integrated QR code system for treasure hunt game. Performs CRUD operations on SQLite data-base that is deployed on Azure app services.',
      src: '/treasurehunt.png',
      tags: ['Django', 'Bootstrap','Website']
    },
    {
        title: 'MPEG layer-II compression',
        description: 'Developed an MPEG-Layer II (MP2) (de)encoder to compress monaural audio (WAV, MP3) by exploiting psychoacoustic models, achieving a balance between audio fidelity and file size.',
        src: '/mpeg_compression.png',
        tags: ['Filter banks', 'DSP', 'Audio Compression']
      },

      {
        title: 'Fpga Stopwatch',
        description: 'Designed, implemented, and verified the functionality of a stopwatch system using HDL (SystemVerilog IEEE 1800-2017) and the De0-Nano FPGA development platform. ',
        src: '/fpga_stopwatch.jpeg',
        tags: ['FPGA', 'Verilog']
      },

    // Add more projects as needed
  ];

export default function library() {
    return (
        <Layout>
        <h1 className="text-4xl font-bold text-center mb-4">Project Library</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              src={project.src}
              tags={project.tags}
            />
          ))}
        </div>
        </Layout>
      )
}



