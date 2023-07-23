import prisma from '../../lib/prisma';

export const prerender = false;

export async function load(){
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    console.log(feed);
    return {
        News: feed
    };
};
