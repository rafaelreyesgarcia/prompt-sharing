import Image from 'next/image'
import Feed from '@components/Feed'

// static metadata

// export const metadata = {
//   title: 'Home'
// }

// dynamic metadata

// export async function generateMetadata({params}) {
//   const product = await getProduct(params.id);

//   return {
//     title: product.title
//   };
// }

export default function Home() {
  return (
    <section className='w-full flex_center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br />
        <span className='orange_gradient text-center'>
          AI-Powered Prompts
        </span>
      </h1>
      <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool to discover, create and share creative prompts
      </p>

      {/* feed */}
      <Feed />
    </section>
  )
}
