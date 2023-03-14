import React from 'react'

function SlokaChat() {
  return (
    <div>
        <div class="bg-gray-100 h-screen flex flex-col justify-end">
            <div class="max-w-md mx-auto px-4 py-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="flex justify-between border-b-2 border-gray-200 p-4">
                    <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full mr-2" src="https://source.unsplash.com/100x100/?portrait" alt="Avatar"/>
                    <div>
                        <p class="font-bold text-gray-800">Jai PatakaSwami</p>
                        <p class="text-sm text-gray-600">Online</p>
                    </div>
                    </div>
                    <div class="flex items-center">
                    <button class="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                        <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 010-1.414z"/></svg>
                    </button>
                    <button class="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
                        <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20"><path d="M14 10a4 4 0 11-8 0 4 4 0 018 0zm-4-3a1 1 0 00-2 0v2a1 1 0 002 0V7zm1 6a1 1 0 00-2 0v1a1 1 0 002 0v-1z"/></svg>
                    </button>
                    <button class="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
                        <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20"><path d="M5.243 3.64a3 3 0 014.243 0l6.364 6.364a3 3 0 010 4.243l-6.364 6.364a3 3 0 01-4.243 0l-6.364-6.364a3 3 0 010-4.243l6.364-6.364zm8.485 8.485a1 1 0 00-1.414 1.414l2.828 2.828a1 1 0 001.414-1.414l-2.828-2.828z"/></svg>
                    </button>
                    <button class="bg-gray-200 hover:bg-gray-300 rounded-full p-2 ml-2">
                        <svg class="h-5 w5 fill-current text-gray-700" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.243-5.64a1 1 0 01-1.414 1.414L10 12.414l-1.829 1.829a1 1 0 01-1.414-1.414L8.586 11 6.757 9.171a1 1 0 011.414-1.414L10 9.586l1.829-1.829a1 1 0 011.414 1.414L11.414 11l1.829 1.829z"/></svg>
                    </button>
                    </div>
                    </div>
                    <div class="px-4 py-6">
                    <div class="flex flex-col mb-4">
                    <div class="flex items-center">
                    <img class="h-8 w-8 rounded-full mr-2" src="https://source.unsplash.com/100x100/?portrait" alt="Avatar"/>
                    <p class="bg-gray-200 rounded-lg px-3 py-2 text-gray-700 max-w-md">Hey, how are you doing?</p>
                    </div>
                    <p class="text-sm text-gray-600 ml-10">12:01 PM</p>
                    </div>
                    <div class="flex flex-col mb-4">

                    <div class="flex items-center justify-end">
                    <p class="bg-blue-500 rounded-lg px-3 py-2 text-white max-w-md">I'm doing well, thanks for asking!</p>
                    <img class="h-8 w-8 rounded-full ml-2" src="https://source.unsplash.com/100x100/?portrait" alt="Avatar"/>
                    </div>
                    
                    <p class="text-sm text-gray-600 text-right mr-10">12:05 PM</p>
                    </div>
                    <div class="flex flex-col mb-4">
                    <div class="flex items-center">
                    <img class="h-8 w-8 rounded-full mr-2" src="https://source.unsplash.com/100x100/?portrait" alt="Avatar"/>
                    <p class="bg-gray-200 rounded-lg px-3 py-2 text-gray-700 max-w-md">That's great to hear!</p>
                    </div>
                    <p class="text-sm text-gray-600 ml-10">12:08 PM</p>
                    </div>
                    <div class="flex flex-col mb-4">
                    <div class="flex items-center justify-end">
                    <p class="bg-blue-500 rounded-lg px-3 py-2 text-white max-w-md">How about you?</p>
                    <img class="h-8 w-8 rounded-full ml-2" src="https://source.unsplash.com/100x100/?portrait" alt="Avatar"/>
                    </div>
                    <p class="text-sm text-gray-600 text-right mr-10">12:10 PM</p>
                    </div>
                    </div>
                    <div class="p-4 border-t-2 border-gray-200">
                    <div class="flex justify-between">
                    <input class="bg-gray-100 focus:bg-white border border-gray-200 rounded-full py-2 px-4 w-full" type="text" placeholder="Type a message..."/>
                    <button class="bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 text-white">Send</button>
            </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default SlokaChat