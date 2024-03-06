import React from 'react'

export const Navbar = () => {
  return (
    <header class="bg-black">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <img src='/logo.png' className='w-20'></img>
        </div>
  
        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75 text-bold" href="/contact"> Contact</a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Login
            </a>
  
            <div class="hidden sm:flex">
              <a
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-700"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </header>
  )
}
