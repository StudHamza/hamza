import React from 'react'
import Layout from '../components/layout';

export default function about() {
  return (
    <Layout>
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl leading-9 font-bold text-gray-900">About Hamza</h1>
            <p className="mt-1 max-w-2xl text-sm leading-7 text-gray-500">
              Welcome to my portfolio! This website is a showcase of my journey and accomplishments.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">Who Am I?</dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                  I am Hamza Mohammed, a Software Engineer. With 3 years of experience in Web Dev, I have cultivated a deep understanding of digital signal processing, maths and programming.
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">What I Do</dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                  My work revolves around automating everyday tasks using python and cron. 
                </dd>
              </div>
              {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">My Mission</dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                  I aim to [state your professional mission or goal]. Through my portfolio, I hope to [impact or contribution you want to make].
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">Why Choose Me?</dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                  <ul className="list-disc pl-5">
                    <li className="mb-2">Expertise: Years of experience in [your field].</li>
                    <li className="mb-2">Passion: Genuine enthusiasm for [specific aspects of your field].</li>
                    <li className="mb-2">Innovation: Constantly evolving and adopting new [technologies/methodologies].</li>
                    <li className="mb-2">Results: Proven track record of [achievements or successful projects].</li>
                  </ul>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">Get in Touch</dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
                  Explore my portfolio to learn more about my work. I am always open to new opportunities and collaborations. Let's connect and discuss how we can work together to achieve your goals.
                </dd>
              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </div>
</Layout>
  )
}
