// export const prerender = true;
// import { NewsArticle } from "../../dataObjects/objects";
// import { supabase } from "$lib/supabaseClient";
// import Enumerable from 'linq';


// export async function load(): Promise<NewsArticle[] | null> {
//     // let { data: NewsArticles, error } = await supabase
//     //     .from('NewsArticles')
//     //     .select('*')
//     let dtos: NewsArticle[] | undefined = [];

//     // if (NewsArticles != null) {
//     //     dtos = Enumerable
//     //     .from(NewsArticles)
//     //     .select((val, i)=> new NewsArticle())
//     //     .toArray();
//     // }

//     // console.log(NewsArticles);
//     // console.log(error?.code);


//     return {
//         news:dtos ?? [],
//     };
// }


import prisma from '../../lib/prisma';

export async function load(){
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        news: feed
    };
};
