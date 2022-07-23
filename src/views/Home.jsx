import React, { useState, useEffect } from 'react'
import { usePrismicDocumentByUID, useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'
import { RichText } from 'prismic-dom';

export default function Home() {

    const [home] = usePrismicDocumentByUID('page', 'home-uid')
    const [destaques] = useSinglePrismicDocument('destaques')
    const [postDetalhado] = useSinglePrismicDocument('post_detalhado')
    const [post] = useAllPrismicDocumentsByType('post')


    const [posts, setPosts] = useState();

    function paginatePosts(qtd) {
        const filtredPosts = post?.slice(0, qtd)
        setPosts(filtredPosts)
    }

    useEffect(() => {
        paginatePosts(2)
    }, [post]);


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
                    {posts?.map(item => (
                        <a href={`/post/${item.uid}`} key={item.id}>{item.data.titulo_do_post}</a>
                    ))}
                </div>
            </section>
            <section className="py-12">
                <h2 className="text-xl font-bold">Post detalhado</h2>
                <div className="flex flex-col">
                    {postDetalhado &&
                        <div
                            dangerouslySetInnerHTML={{ __html: RichText.asHtml(postDetalhado.data.conteudo) }}
                        />
                    }
                </div>
            </section>



        </div>
    )
}
