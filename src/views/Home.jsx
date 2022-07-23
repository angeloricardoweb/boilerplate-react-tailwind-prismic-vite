import React from 'react'
import { usePrismicDocumentByUID, useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'

export default function Home() {

    const [home] = usePrismicDocumentByUID('page', 'home-uid')
    const [destaques] = useSinglePrismicDocument('destaques')
    const [post] = useAllPrismicDocumentsByType('post')


    return (
        <div className='text-center'>

            {home?.data.conteudo}
            <section className='py-12'>
                <h2 className="text-xl font-bold">Destaques</h2>
                <div className='grid grid-cols-3 justify-items-center'>
                    {destaques?.data.destaque.map(item => (
                        <div className='border' key={item.titulo}>
                            <h2>{item.titulo}</h2>
                            <img src={item.banner.url} alt="" width="220px" />
                            <h1>{item.resumo}</h1>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12">
                <h2 className="text-xl font-bold">Posts</h2>
                <div className="flex flex-col">
                    {post?.map(item => (
                        <a href={`/post/${item.uid}`} key={item.id}>{item.data.titulo_do_post}</a>
                    ))}
                </div>
            </section>

        </div>
    )
}
