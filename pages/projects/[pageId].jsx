import * as React from 'react'

import {getDatabasePages, getPageContent} from '../api/connectNotion.jsx'

import { NotionAPI } from 'notion-client'
const notion2 = new NotionAPI()

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

import { NotionRenderer } from 'react-notion-x'

export async function getStaticPaths() {
  const {response} = await getDatabasePages();
  return {
    paths: response.results.map((page) => ({
      params: { pageId: page.id },
    })),
    fallback: false,
  };
}


export default function blogPost({ recordMap }) {
  return (
    <div>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} components={{
      Code,
      Collection,
      Equation,
      Modal,
      Pdf,
      nextImage: Image,
      nextLink: Link
    }}/>
    </div>
  )
}

export async function getStaticProps({ params }){
  const {recordMap} = await getPageContent(notion2,params.pageId)
  return {
    props:{
      recordMap: recordMap
    }
  }
}
