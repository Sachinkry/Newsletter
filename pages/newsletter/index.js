import Layout from '@/components/layouts/NewsletterLayout'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import posts from '@/data/posts'
import Posts from '@/components/Posts'
import NewsletterBottom from '@/components/NewsletterBottom'


export default function Home() {
  
  
  return (
    <Layout >
      <div className='lg:px-16 md:px-10 sm:px-8 px-6  '>
        <div className='h-screen  mt-12 '>
            <Posts posts={posts} />

        </div>
        <NewsletterBottom />
      </div>
    </Layout>
  )
}
