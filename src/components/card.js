import React from 'react'

export default function Card({title, description,src,tags}) {
  return (
    <a href=''>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full h-auto" src={src} alt="Sunset in the mountains"></img>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">
            {description}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
        </div>
    </a>
  )
}
