import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Card from "../components/card";
import { auth, firebase } from "../firebase";
import { i18n, withTranslation } from "../i18next.config";
import PropTypes from "prop-types";
import { getCards } from './api/listFunctions'

const ListView = ({ t, allCards, preview }) => (
  <>
    <div class="leading-normal tracking-normal text-white gradient">
      <Head />
      <Nav />
      {/* <!--Hero--> */}
      <div class="pt-24">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose w-full">Lista de Clínicas</p>
            <div class="relative mt-6 max-w-lg mx-auto">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <input
                class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <main class="my-8">
        <div class="container mx-auto px-6">
          
          {allCards.map((card) =>( 
            <Card name={card.name} responsible={card.responsible} ></Card>
          ))}
          <div
            class="h-64 rounded-md overflow-hidden bg-cover bg-center"
            // style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Sport Shoes</h2>
                <p class="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Shop Now</span>
                  <svg
                    class="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="md:flex mt-8 md:-mx-4">
            <div
              class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
            >
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                  <p class="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg
                      class="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
              // style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
            >
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Games</h2>
                  <p class="mt-2 text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore facere provident molestias ipsam sint voluptatum
                    pariatur.
                  </p>
                  <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg
                      class="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Chanel</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Man Mix</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Classic watch</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">woman mix</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-16">
            <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Chanel</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Man Mix</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">Classic watch</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  class="flex items-end justify-end h-56 w-full bg-cover"
                  // style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"
                >
                  <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div class="px-5 py-3">
                  <h3 class="text-gray-700 uppercase">woman mix</h3>
                  <span class="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </>
)
export default withTranslation("common")(ListView)

ListView.getInitialProps = async () => ({
  namespacesRequired: ["common"]
})

ListView.propTypes = {
  t: PropTypes.func.isRequired
}

export async function getStaticProps({}) {
  const allCards = (await getCards()) || [];
  return {
    props: { allCards }
  }
}


