import Layout from '@/components/newsletter/NewsletterLayout'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import posts from '@/data/posts'
import Posts from '@/components/newsletter/Posts'
import NewsletterBottom from '@/components/newsletter/NewsletterBottom'


export default function Home() {
  
  
  return (
    <Layout >
      <div className='lg:px-16 md:px-10 sm:px-6 px-4  '>
        <div className='min-h-[400px]  mt-12 '>
            <Posts posts={posts} />

        </div>
        <NewsletterBottom />
      </div>
    </Layout>
  )
}
